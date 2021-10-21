import { Controller } from "stimulus"

export default class extends Controller {
  handleDatePicked(event) {
    var pageUrl = "?effective_date=" + event.detail.newDate;
    window.history.pushState('', '', pageUrl);
  }
}
