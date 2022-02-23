import { Controller } from "@hotwired/stimulus"

export default class InlineAddController extends Controller {
  static targets = [ "form", "input" ]

  connect() {
    this.model        = this.data.get("model")
    this.field        = this.data.get("field")
    this.form_url     = this.data.get("form-url")
    this.input_class  = this.data.get("input-class")
  }

  insertForm() {
    this.element.insertAdjacentHTML("afterbegin", this.form())
    this.inputTarget.focus()
  }

  onPostSuccess(event) {
    let [data, _status, _xhr] = event.detail;

    let html = this.nonForm(data)
    this.formTarget.insertAdjacentHTML('afterend', html);
    this.formTarget.remove()
  }

  close(event) {
    if(event.key == "Escape") {
      this.formTarget.remove()
    }
  }

  submit() {
    Rails.fire(this.formTarget, 'submit')
  }

  form() {
    return `
      <form action="${this.form_url}" accept-charset="UTF-8" data-remote="true" data-inline-add-target="form" data-action="ajax:success->inline-add#onPostSuccess keyup@window->inline-add#close" method="post">
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name="authenticity_token" value="${this.authenticity_token}" />
        <input type="text" name="${this.model}[${this.field}]" class="${this.input_class}" id="${this.model}_${this.field}" data-inline-add-target="input" data-action="blur->inline-add#submit">
      </form>
    `
  }

  nonForm(data) {
    return `<inline-edit
        data-controller="inline-edit"
        data-inline-edit-model="${this.model}"
        data-inline-edit-field="${this.field}"
        data-inline-edit-form-url="${data.update_url}"
        data-inline-edit-input-class="form-control-inline"
        data-inline-edit-display-value="${data.name}"
      ></inline-edit>`
  }

  get authenticity_token() {
    return document.querySelector("meta[name='csrf-token']").getAttribute("content");
  }
}
