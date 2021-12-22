import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { startingDate: String }

  handleNewData(event) {
    const people = event.detail.unassigned;
    people.forEach((person) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", "1000")
      svg.setAttribute("height", "300")

      const personNode = document.createElementNS("http://www.w3.org/2000/svg", "g")
      personNode.classList.add("person-node")
      personNode.setAttribute("transform", "translate(265,0)")
      personNode.setAttribute("data-controller", "person-node")
      personNode.setAttribute("data-person-node-person-string-value", encodeURIComponent(JSON.stringify(person)))

      svg.appendChild(personNode)
      this.element.appendChild(svg)
    })
  }

  connect() {
  }
}
