import { Controller } from "@hotwired/stimulus"
import ProgressBar from "progressbar.js"

export default class InlineDeleteController extends Controller {
  static targets = [ "deleteForm", "deleteButton" ]
  connect() {
    this.formUrl              = this.data.get("form-url")
    this.deleteSuccessAction  = this.data.get("success-action")

    this.element.innerHTML = this.deleteButtonHtml()

    this.duration = 1000;
    this.bar = new ProgressBar.Circle(this.deleteButtonTarget, {
      strokeWidth: 20,
      easing: 'easeInOut',
      duration: this.duration,
      color: '#910016',
      trailColor: 'rgba(255,255,255,0)',
      trailWidth: 1,
      svgStyle: {
        position: "relative",
        top: "-15px"
      },
      text: {
        className: "fa fa-trash"
      }
    });
  }

  deleteItem() {
    Rails.fire(this.deleteFormTarget, 'submit')
  }

  pressingDown() {
    this.timerId = null
    let start;

    let timer = (timestamp) => {
      if (start === undefined) {
        start = timestamp;
      }
      const elapsed = timestamp - start;

      if (elapsed < this.duration) {
        this.timerId = requestAnimationFrame(timer);
      } else {
        this.deleteItem();
      }
    }
    this.bar.set(0.2)
    this.bar.animate(1.0)
    requestAnimationFrame(timer);
  }

  notPressingDown() {
    cancelAnimationFrame(this.timerId);
    this.bar.animate(0)
  }

  deleteFailed(event) {
    let [data, _status, _xhr] = event.detail;
    alert(data.error.message)
  }

  deleteButtonHtml() {
    return `
      <form class="inline" data-remote="true" method="post" action="${this.formUrl}" data-inline-delete-target="deleteForm" data-action="ajax:success->${this.deleteSuccessAction} ajax:error->inline-delete#deleteFailed">
        <input type="hidden" name="_method" value="delete">
        <i class="fa fa-trash" 
          data-inline-delete-target="deleteButton" 
          data-action="
            mousedown->inline-delete#pressingDown
            mouseup->inline-delete#notPressingDown
            mouseleave->inline-delete#notPressingDown
            touchstart->inline-delete#pressingDown
            touchend->inline-delete#notPressingDown
          "></i>
        <input type="hidden" name="authenticity_token" value="${this.authenticity_token}">
      </form>
    `
  }

  get authenticity_token() {
    return document.querySelector("meta[name='csrf-token']").getAttribute("content");
  }
}
