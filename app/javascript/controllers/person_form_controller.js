import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "sectionOne", "sectionTwo", "sectionThree" ]

  handleDatePicked(event) {
    event.preventDefault();
    this.sectionOneTarget.classList.add("hidden")
    this.sectionTwoTarget.classList.remove("hidden")
  }

  handlePersonTypePicked(event) {
    this.sectionTwoTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.remove("hidden")
  }

  handleSubmit(event) {
    console.error("=============>", event);
  }

  connect() {
  }
}
