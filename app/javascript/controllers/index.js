// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { application } from "./application"

// Register each controller with Stimulus
import controllers from "./**/*_controller.js"
controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})

import { Dropdown, Modal, Tabs, Popover, Toggle, Slideover } from "tailwindcss-stimulus-components"
application.register('dropdown', Dropdown)
application.register('modal', Modal)
application.register('tabs', Tabs)
application.register('popover', Popover)
application.register('toggle', Toggle)
application.register('slideover', Slideover)

import DateNavigatorController from "./date_navigator_controller"
import EffectiveDatePickerController from "./effective_date_picker_controller"
import OrgChartController from "./org_chart_controller"
import OrgDataController from "./org_data_controller"
import TeamChartController from "./team_chart_controller"
import TeamDataController from "./team_data_controller"
import PersonButtonsController from "./person_buttons_controller"
import PersonFormController from "./person_form_controller"
import UrlDateManager from "./url_date_manager_controller"
application.register("effective-date-picker", EffectiveDatePickerController)
application.register("date-navigator", DateNavigatorController)
application.register("org-chart", OrgChartController)
application.register("org-data", OrgDataController)
application.register("team-chart", TeamChartController)
application.register("team-data", TeamDataController)
application.register("person-buttons", PersonButtonsController)
application.register("person-form", PersonFormController)
application.register("url-date-manager", UrlDateManager)


import Flatpickr from 'stimulus-flatpickr'
application.register('flatpickr', Flatpickr)
