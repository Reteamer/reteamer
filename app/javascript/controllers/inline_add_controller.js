import { Controller } from "@hotwired/stimulus"

export default class InlineAddController extends Controller {
  static targets = [ "source", "form", "input" ]

  connect() {
    this.model        = this.data.get("model")       || "model"
    this.name         = this.data.get("name")        || "name"
    this.form_url     = this.data.get("form-url")    || "/"
    this.input_class  = this.data.get("input-class") || "input"
  }

  insertForm() {
    this.sourceTarget.insertAdjacentHTML("afterbegin", this.form())
    this.inputTarget.focus()
  }

  onPostSuccess(event) {
    let [data, _status, _xhr] = event.detail;

    let html = `<p
        data-controller="inline-edit"
        data-inline-edit-model="job_family"
        data-inline-edit-name="name"
        data-inline-edit-form-url="${data.update_url}"
        data-inline-edit-input-class="form-control-inline"
        data-inline-edit-target="source"
        data-action="click->inline-edit#toggle click@window->inline-edit#close"
      >${data.name}</p>`
    this.formTarget.insertAdjacentHTML('afterend', html);
    this.formTarget.remove()
  }

  close(event) {
    if (this.element.contains(event.target) === false) {
      this.submit()
    }
  }

  submit() {
    this.formTarget.submit()
  }

  form() {
    return `
      <form action="${this.form_url}" accept-charset="UTF-8" data-remote="true" data-inline-add-target="form" data-action="ajax:success->inline-add#onPostSuccess" method="post">
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name="authenticity_token" value="${this.authenticity_token}" />
        <input type="text" name="${this.model}[${this.name}]" class="${this.input_class}" id="${this.model}_${this.name}" data-inline-add-target="input" data-action="onblur->inline-add#submit">
      </form>
    `
  }

  get authenticity_token() {
    return document.querySelector("meta[name='csrf-token']").getAttribute("content");
  }
}
