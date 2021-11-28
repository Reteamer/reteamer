import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  handleDatePicked(event) {
    var pageUrl = updateUrlParameter(window.location.href, "effective_date", event.detail.newDate)
    window.history.pushState('', '', pageUrl);
  }

  handleProposalPicked(event) {
    const pageUrl = updateUrlParameter(window.location.href, "proposal_name", event.detail.proposalName)
    window.history.pushState('', '', pageUrl);
  }
}


function updateUrlParameter(uri, key, value) {
  // remove the hash part before operating on the uri
  var i = uri.indexOf('#');
  var hash = i === -1 ? ''  : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);

  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + "=" + value + '$2');
  } else {
    uri = uri + separator + key + "=" + value;
  }
  return uri + hash;  // finally append the hash as well
}
