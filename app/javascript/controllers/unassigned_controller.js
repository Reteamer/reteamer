import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { startingDate: String }

  handleNewData(event) {
    const people = event.detail.unassigned;
    people.forEach((person) => {
      const personNode = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      personNode.classList.add("node")
      personNode.setAttribute("width", "1000")
      personNode.setAttribute("height", "300")

      const personBox = document.createElementNS("http://www.w3.org/2000/svg", "g")
      personBox.classList.add("person-node")
      personBox.setAttribute("transform", "translate(265,0)")
      personBox.setAttribute("width", 250)
      personBox.setAttribute("height", 190)
      personBox.innerHTML = this.personBox(person)

      personNode.appendChild(personBox)
      this.element.appendChild(personNode)
    })
  }

  connect() {
  }

  personBox(person) {
    const avatarRadius = 30;
    const avatarDiameter = avatarRadius*2;
    const nodeWidth = 250;
    const nodeHeight = 190;
    return `
      <rect class="person-box" width="${nodeWidth}" height="${nodeHeight-avatarRadius}" x="0" y="${avatarRadius}" fill="black"></rect>
      <rect class="person-bar ${person.type}" width="${nodeWidth}" y="${avatarRadius}"></rect>
      <clipPath id="clipCircle">
        <circle r="${avatarRadius}" cx="${nodeWidth/2}" cy="${avatarRadius}"></circle>
      </clipPath>
      <image href="${person.image_url || ''}" x="${nodeWidth/2 - avatarRadius}" width="${avatarDiameter}" height="${avatarDiameter}" clip-path="url(#clipCircle)" />
      <text class="employment-id" x="${nodeWidth-150}" y="70">${person.employee_id}</text>
      <text class="person-name" x="${nodeWidth/2}" text-anchor="middle" y="90">${person.name}</text>
      <foreignObject  y="110" width="${nodeWidth}" height="40">
        <div class="person-title">${person.title}</div>
      </foreignObject>
      <g class="people-buttons hidden" data-controller="person-buttons">
        <g class="person-button delete-person" 
          data-action="click->person-buttons#deletePerson"
          data-person-buttons-person-key-param="${person.id}"  
          transform="translate(${nodeWidth - 24},${nodeHeight - 24})"
        >
          <circle r="10" cx="10" cy="10"></circle> 
          <image xlink:href="trash.svg" x="4" y="4" height="12" width="12"></image>
        </g>
        <g class="person-button edit-person"
          data-action="click->person-buttons#editPerson"
          data-person-buttons-person-param="${encodeURIComponent(JSON.stringify(person))}" 
          transform="translate(${nodeWidth - 48},${nodeHeight - 24})"
        >
          <circle r="10" cx="10" cy="10"></circle>
          <image xlink:href="pencil-solid.svg" x="4" y="4" height="12" width="12"></image>
        </g>
      </g>
    `;
  }
}