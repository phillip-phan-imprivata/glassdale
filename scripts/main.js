import {CriminalList} from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { ShowWitnessButton } from "./witnesses/ShowWitnessButton.js"
import { facilityButton } from "./facilities/DisplayFacilitiesButton.js"
import "./notes/NoteList.js"
import "./witnesses/WitnessList.js"
import "./facilities/FacilityList.js"

NoteForm()
ShowNoteButton()
ShowWitnessButton()
CriminalList()
ConvictionSelect()
OfficerSelect()
facilityButton()
