import {CriminalList} from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { ShowWitnessButton } from "./witnesses/ShowWitnessButton.js"
import "./notes/NoteList.js"
import "./witnesses/WitnessList.js"

NoteForm()
ShowNoteButton()
ShowWitnessButton()
CriminalList()
ConvictionSelect()
OfficerSelect()
