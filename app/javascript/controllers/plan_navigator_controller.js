import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  emitPlanPickedEvent(event) {
    emitEvent("planPicked", { planName: event.target.value})
  }

  connect() {
  }
}
