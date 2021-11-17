import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  handleChange(event) {
    emitEvent("planPicked", { planName: event.target.value})
  }

  connect() {
  }
}
