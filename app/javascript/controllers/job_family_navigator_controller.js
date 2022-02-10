import {Controller} from "@hotwired/stimulus";
import {emitEvent} from "../event_emitter";

export default class JobFamilyNavigatorController extends Controller {
  emitNewJobFamily(e) {
    emitEvent("jobFamilyPicked", { jobFamilyKey: e.target.value })
  }

  connect() {}
}
