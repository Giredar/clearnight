import Contact from "./Contact";
import acclogo2 from "../assets/acclogo2.png";
import "../css/clearnight.css";

function ClearNight() {
  return (
    <>
      <div className="logo">
        <img src={acclogo2} alt="ACC" id="accLogo" />
      </div>
      <div className="itemTitle">
        <h1 className="itemTitleH1 headingFont">CLEAR NIGHT AGARBATHI</h1>
        <h2 className="itemTitleH2 headingFont">(INCENSE STICKS)</h2>
      </div>

      <div className="content">
        <div className="itemDOU section">
          <h3 className="itemDOUH3 ">DIRECTION OF USE:</h3>
          <div>
            <p>
              Ignite the coated end of incense stick and blow off flame. Put the
              incense stick on stand in room for proper spreading of smoke. Keep
              the windows and doors open for proper ventilation.
            </p>
          </div>
        </div>

        <div className="itemPrecautions section">
          <h3>
            <span role="img">⚠️</span> SAFETY PRECAUTIONS:
          </h3>
          <ol>
            <li>
              Keep away from foodstuffs, empty foodstuff containers and animal
              food.
            </li>
            <li>Avoid contact with mouth, eyes and skin.</li>
            <li>Keep ignited stick away from flammable materials.</li>
            <li>Avoid excessive inhalation of smoke.</li>
          </ol>
        </div>
        <div className="itemSymptoms section">
          <h3>
            <span role="img">🤒</span> SYMPTOMS OF POISONING:
          </h3>
          <p>
            Headache, nausea, vomiting, excessive salivation, burning or itching
            sensation in eyes.
          </p>
        </div>
        <div className="itemAntidote section">
          <h3>
            <span role="img">🧪</span> ANTIDOTE:
          </h3>
          <p>No specific antidote is known. Treat symptomatically.</p>
        </div>
        <div className="itemFirstAid section">
          <h3>
            <span role="img">🚑</span> FIRST AID:
          </h3>
          <ol>
            <li>If swollowed, seek medical advice immediately.</li>
            <li>
              If eyes are affected, flush with plenty of water. If pain,
              irritation or redness exist in the eye, seek medical advice.
            </li>
            <li>
              If eyes are contaminated, flush with plenty of clean water for
              about 10 to 15 minutes.
            </li>
            <li>
              If inhaled, remove the patient to fresh air. If person is feeling
              unwell, seek medical advice.
            </li>
          </ol>
        </div>

        <div className="itemDisposal section">
          <h3>
            <span role="img">🗑️</span> DISPOSAL OF USED CONTAINERS:
          </h3>
          <ol>
            <li>
              {" "}
              It shall be the duty of the manufacturers,formulators of
              insecticide and operators to dispose packages or surplus material
              and washings in a safe manner so as to prevent environmental or
              water pollution.
            </li>
            <li>
              The used packages shall not be thrown outside to prevent their
              re-use.
            </li>
            <li>
              The packages shall be broken and buried away from habitation.
            </li>
          </ol>
        </div>
        <div className="itemStorage section">
          <h3>
            <span role="img">📦</span> STORAGE CONDITIONS:
          </h3>
          <ol>
            <li>
              The packages containing the insecticides shall be stored in
              separate rooms or premises away from the rooms or premises used
              for storing other articles particularly articles of or shall be
              kept in separate almirahs under lock and key.
            </li>
            <li>
              The rooms or premises means for storing insecticide shall be well
              built, dry, well-lit and ventilated and of sufficient dimension to
              avoid contamination with vapor.
            </li>
          </ol>
        </div>
        <div className="contactDiv">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default ClearNight;
