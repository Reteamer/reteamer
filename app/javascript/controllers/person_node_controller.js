import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [  ]

  connect() {
    this.element.querySelector(".person-button").setAttribute("cursor", "pointer")
  }
}
