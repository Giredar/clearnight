import Batch from "./Batch";

function Contact() {
  return (
    <>
      <div className="pestoxContact">
        {/* <div className="chalkMarketed">
          <h3>BRAND OWNED AND MARKETED BY:</h3>
          <address>
            PEST CLEAR AGRO PRODUCTS <br />
            5A, Valluvar Street, Coimbatore - 641012.
          </address>
        </div>  */}

        <div className="mobileOnly">
          <h3>MANUFACTURING DETAILS:</h3>
          <p>Manufactured By:</p>
          <p>AUMCROPCARE SOLUTIONS PRIVATE LIMITED, Coimbatore-641659</p>
        </div>

        <Batch />

        <div className="customerCare">
          <h3>CUSTOMER CARE:</h3>
          <div>
            Address: <br />
            {/* <address>
              PEST CLEAR AGRO PRODUCTS <br />
              5A, Valluvar Street, Coimbatore - 641012.
            </address>
            Email id : pestclearagroproducts@gmail.com <br />
            Contact No. : 8144812615, 9443123451 */}
            <address>
              AUMCROPCARE SOLUTIONS PRIVATE LIMITED <br />
              Vagarayampalayam, Coimbatore - 641659.
            </address>
            Email id : aumcropcare@gmail.com <br />
            Contact No. : 9976926740
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
