import { Controller } from "@hotwired/stimulus"

export default class InlineEditController extends Controller {
  static targets = [ "form", "deleteForm", "input" ]
  connect() {
    this.model        = this.data.get("model")
    this.field        = this.data.get("field")
    this.form_url     = this.data.get("form-url")
    this.input_class  = this.data.get("input-class")
    this.displayValue = this.data.get("display-value")

    this.showNonForm()
  }

  showForm(event) {
    event.stopPropagation()
    if (this.data.get("mode") != "form") {
      this.element.innerHTML = this.form()
      this.data.set("mode", "form")
      this.inputTarget.focus()
      this.inputTarget.value = this.displayValue
    }
  }

  onPostSuccess(event) {
    let [data, _status, _xhr] = event.detail;

    this.displayValue = data[this.field]
    this.showNonForm();
  }

  onDeleteSuccess(event) {
    function removeFadeOut(el, speed) {
      const hidable = el.querySelector(".inline-edit")
      hidable.style.transition = `all ${speed}ms ease-out`;
      hidable.style.transform = "translateX(300px)";
      hidable.style.opacity = 0;
      setTimeout(function() {
        el.remove();
      }, speed);
    }
    removeFadeOut(this.element, 600)
  }

  showNonForm() {
    this.element.innerHTML = this.nonForm()
    this.data.set("mode", "nonForm")
  }

  close(event) {
    if (event.key == "Escape" && this.data.get("mode") == "form") {
      this.showNonForm()
    }
  }

  submit() {
    Rails.fire(this.formTarget, 'submit')
  }

  form() {
    return `
      <form action="${this.form_url}" accept-charset="UTF-8" data-remote="true" data-inline-edit-target="form" method="post" data-action="ajax:success->inline-edit#onPostSuccess keyup@window->inline-edit#close">
        <input name="utf8" type="hidden" value="✓">
        <input type="hidden" name="_method" value="patch">
        <input type="hidden" name="authenticity_token" value="${this.authenticity_token}">
        <input type="text" name="${this.model}[${this.field}]" class="${this.input_class}" id="${this.model}_${this.field}" data-inline-edit-target="input" data-action="blur->inline-edit#submit">
      </form>
    `
  }

  nonForm() {
    return `<div class="inline-edit">
      <i class="fa fa-pen" data-action="click->inline-edit#showForm"></i>
      <inline-delete data-controller="inline-delete" data-inline-delete-form-url="${this.form_url}" data-inline-delete-success-action="inline-edit#onDeleteSuccess"></inline-delete>
      <span data-action="click->inline-edit#showForm">${this.displayValue}</span>
    </div>`
  }

  get authenticity_token() {
    return document.querySelector("meta[name='csrf-token']").getAttribute("content");
  }
}
