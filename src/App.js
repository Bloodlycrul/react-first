
import Navbar from './component/Navbar';
import './App.css';


function App() {
  return (
    <>
    <>
  <Navbar/>
  <hr className="hr2" />
  <div className="mt1">
    <h1>Baan Sri Dha - Lanna Style Home &amp; Yoga</h1>
    <div className="info-content">
      <div className="info-content display">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: 14,
            width: 14,
            fill: "currentcolor"
          }}
        >
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fillRule="evenodd"
          />
        </svg>
        <p>4.97 · </p>
        <a href="/">263 reviews </a>
        <p> · Superhost ·</p>
        <a href="/">Hai Ya, Chang Wat Chiang Mai, Thailand</a>
      </div>
      <div className="save-btn info-content">
        <a href="/">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: 16,
              width: 16,
              stroke: "currentcolor",
              strokeWidth: 2,
              overflow: "visible"
            }}
          >
            <g fill="none">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
              <path d="M16 3v23V3z" />
              <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
            </g>
          </svg>
          Share
        </a>
        <a href="/">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: 16,
              width: 16,
              stroke: "currentcolor",
              strokeWidth: 2,
              overflow: "visible"
            }}
          >
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>{" "}
          Save
        </a>
      </div>
    </div>
    {/* Header Part Ends Here */}
    {/* Image Section Start From Here */}
    <div className="images-section">
      <div className="left-image">
        <img
          src="https://a0.muscache.com/im/pictures/513bf16b-b908-47fa-a283-0f6ea14629fe.jpg?im_w=1200"
          alt=""
        />
      </div>
      <div className="image-collage">
        <img
          src="https://a0.muscache.com/im/pictures/2e945b22-a84e-4d19-9869-ac65a0a997e5.jpg?im_w=720"
          alt=""
        />
        <img
          src="https://a0.muscache.com/im/pictures/51e34c58-2b77-4448-89ce-978cc3cd79d2.jpg?im_w=720"
          alt=""
        />
        <div className="under-div">
          <img
            src="https://a0.muscache.com/im/pictures/ec6ba8c4-0f8a-48a9-9d7b-ae3fce114ff3.jpg?im_w=720"
            alt=""
          />
          <img
            src="https://a0.muscache.com/im/pictures/bbae36de-ce54-4fb2-af11-bf8550d7661f.jpg?im_w=720"
            alt=""
          />
        </div>
      </div>
    </div>
    {/* Image Section Ends Here */}
    {/* Content Section Start */}
    <div className="split">
      <div className="width">
        <div className="details-section">
          <div className="heading">
            <div className="home">
              <h1>Entire home hosted by Ae And Ton</h1>
              <ul>
                <li>5 guests</li>
                <li>3 bedrooms</li>
                <li>3 beds</li>
                <li>3 bathrooms</li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img
              className="pos"
              src="https://a0.muscache.com/im/pictures/user/77bff038-6658-468e-994a-ebff11328a4c.jpg?im_w=240"
              alt=""
            />
            <svg
              className="pos1"
              viewBox="0 0 14 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 24,
                width: 24,
                display: "block",
                fill: "currentcolor"
              }}
            >
              <path
                d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                fill="#fff"
              />
              <path
                d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                fill="#ffb400"
              />
              <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f" />
              <path
                d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                fill="#484848"
              />
            </svg>
          </div>
        </div>
        <hr />
        <div className="services-section">
          <div className="remoteword">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: 24,
                width: 24,
                fill: "currentcolor"
              }}
            >
              <path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path>
            </svg>
            <div className="remotewordcontent">
              <h5>Great for remote work</h5>
              <p>
                Fast wifi at 62 Mbps, plus a dedicated workspace in a common
                area.
              </p>
            </div>
          </div>
          <div className="remoteword mt">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: 24,
                width: 24,
                fill: "currentcolor"
              }}
            >
              <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
            </svg>
            <div className="remotewordcontent">
              <h5>Self check-in</h5>
              <p>You can check in with the doorperson.</p>
            </div>
          </div>
          <div className="remoteword mt">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: 24,
                width: 24,
                fill: "currentcolor"
              }}
            >
              <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
            </svg>
            <div className="remotewordcontent">
              <h5>Ae And Ton is a Superhost</h5>
              <p>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for their guests.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="padding-top-bottom">
          <img
            className="air-coverimg"
            src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            alt=""
          />
          <p>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <a href="/">Learn more</a>
        </div>
        <hr />
        <div className="padding-top-bottom">
          <p>
            Our charming home is semi wooden with 3 A/C bedrooms and 3
            bathrooms. It is equipped with a kitchen, a bar, fiber optic wifi
            and a large open space upstairs. It is perfect for a family with
            children or a group of friends. We are 10 minutes walking distance
            from Chiangmai Gate and the Saturday walking street. We offer
            complimentary home cooked breakfast every morning and a
            complimentary pick up service from the airport.
          </p>
          <a className="flex-display" href="/">
            Show more{" "}
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: 12,
                width: 12,
                display: "block",
                fill: "var(--f-k-smk-x)"
              }}
            >
              <path
                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <hr />
        <div className="padding-top-bottom">
          <h3>Where you'll sleep</h3>
          <div className="cards">
            <div className="first-card margin">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
              </svg>
              <h4>Bedroom 1</h4>
              <p>1 King bed</p>
            </div>
            <div className="first-card second">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
              </svg>
              <h4>Bedroom 1</h4>
              <p>1 King bed</p>
            </div>
            <div className="first-card second">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
              </svg>
              <h4>Bedroom 1</h4>
              <p>1 King bed</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="padding-top-bottom">
          <h3>What this place offers</h3>
          <div className="first-block">
            <div className="flex-box">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z"></path>
              </svg>
              <h4>Countyard view</h4>
            </div>
            <div className="flex-box width1">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z"></path>
              </svg>
              <h4>Garden view</h4>
            </div>
          </div>
          <div className="first-block">
            <div className="flex-box">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path>
              </svg>
              <h4>Kitchen</h4>
            </div>
            <div className="flex-box width1">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path>
              </svg>
              <h4>Fast wifi – 62 Mbps</h4>
            </div>
          </div>
          <div className="first-block">
            <div className="flex-box">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path>
              </svg>
              <h4>Dedicated workspace</h4>
            </div>
            <div className="flex-box width1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
              </svg>
              <h4>Free driveway parking on premises – 2 spaces</h4>
            </div>
          </div>
          <div className="first-block">
            <div className="flex-box">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
              <h4>Pets allowed</h4>
            </div>
            <div className="flex-box width1">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="m26.2875958 2c1.4943151.00218728 2.7591731 1.1037772 2.9663548 2.58389031.4975641 3.56108628.7460494 7.36641109.7460494 11.41610969s-.2484853 7.8550234-.7460839 11.4163568c-.1988613 1.4206714-1.3725089 2.4927235-2.7894512 2.5781497l-.1783321.0054935h-20.57372863c-1.49431506-.0021873-2.7591731-1.1037772-2.96635481-2.5838903-.49756403-3.5610863-.74604936-7.3664111-.74604936-11.4161097s.24848533-7.85502341.74608392-11.41635683c.19886126-1.42067133 1.37250888-2.49272345 2.78945123-2.57814972l.17833204-.00549345zm-.001463 1.99999893h-20.57080259c-.49804876.00072866-.919536.36781024-.98852197.86064804-.48434104 3.46644876-.72680824 7.17961153-.72680824 11.13935193 0 3.9597426.2424672 7.6729054.72677368 11.139107.06371126.4551553.42774918.8029468.87395616.8543314l.11313735.0065616h20.57080261c.4980488-.0007265.919536-.3678081.988522-.8606459.484341-3.4664487.7268082-7.1796115.7268082-11.1393541 0-3.9597404-.2424672-7.67290317-.7267737-11.13910479-.0690205-.49308494-.4905077-.86016652-.9870935-.86089518zm-10.2861328 3.00000107c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm-5.8414878 7.4999981c-.34108957-.0001654-.67972606.0242467-1.01356612.0725599-.09481995.4612974-.14494608.9385159-.14494608 1.4274401 0 3.8659951 3.1340068 7 7 7 2.7319686 0 5.0983993-1.5650514 6.2516347-3.8475004-.2599201.0223771-.5214932.0336332-.7841237.0335052-2.2620527-.0011072-4.4437323-.8444711-6.1250979-2.4078908l-.2367463-.2282308c-1.3302626-1.3311149-3.1018689-2.0498832-4.9471546-2.0498832zm5.8414878-5.4999981c-2.5924559 0-4.8557544 1.4092904-6.06558041 3.5035562l.22458041-.0035562c2.2624645 0 4.4444831.8435532 6.1243595 2.4073778l.2365208.22829c1.3314314 1.3305789 3.1034818 2.049432 4.9486075 2.0503351.4925113.0002394.9799732-.0508503 1.4553384-.1512223.0503426-.3388527.0761738-.6838001.0761738-1.0347806 0-3.8659932-3.1340068-7-7-7zm-9-3c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z"></path>
              </svg>
              <h4>Paid washer – In building</h4>
            </div>
          </div>
          <div className="first-block">
            <div className="flex-box">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path>
              </svg>
              <h4>AC – split-type ductless system</h4>
            </div>
            <div className="flex-box width1">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  fill: "currentcolor"
                }}
              >
                <path d="M7.5 2a4.5 4.5 0 0 1 4.473 4H14v2H8V6h1.95a2.5 2.5 0 0 0-4.945.336L5 6.5V16h26v2h-2v5a5.001 5.001 0 0 1-3 4.584V30h-2v-2H8v2H6v-2.416a5.002 5.002 0 0 1-2.995-4.349L3 23v-5H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zm19.499 16h-22L5 23a3 3 0 0 0 2.65 2.98l.174.015L8 26h16a3 3 0 0 0 2.995-2.824L27 23z"></path>
              </svg>
              <h4>Bath</h4>
            </div>
          </div>
          <button className="btnall">Show all 63 amenities</button>
          <hr className="hr1" />
        </div>
      </div>
      {/* Pricing Card Start From Here */}
      <div className="card">
        <div className="flex">
          <div>
            <h3>
              $8,376 <span className="small">night</span>
            </h3>
          </div>
          <div className="rating">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: 10,
                width: 10,
                fill: "currentcolor"
              }}
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fillRule="evenodd"
              />
            </svg>
            <p>4.97 ·</p>
            <a href="/">263 reviews </a>
          </div>
        </div>
        <div className="border">
          <div className="CHECK">
            <div className="checkin">
              <p>CHECK-IN</p>
              <p>4/16/2023</p>
            </div>
            <div className="CHECK-OT">
              <p>CHECKOUT</p>
              <p>4/21/2023</p>
            </div>
          </div>
          <div className="guest-booking">
            <div>
              <p>Guest</p>
              <p>1 guest</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <button className="btn">Reserve</button>
        <p className="align-center">You won't be charged yet</p>
        <div className="flex">
          <a href="/">₹8,376 x 5 nights</a>
          <p>₹41,879</p>
        </div>
        <div className="flex">
          <a href="/">Service fee</a>
          <p>₹5,912</p>
        </div>
        <hr />
        <div className="flex">
          <a href="/">Total before taxes</a>
          <p>₹47,791</p>
        </div>
      </div>
    </div>
    <div className="space">
      <div className="home calander-menu">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: 25,
            width: 25,
            fill: "currentcolor"
          }}
        >
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fillRule="evenodd"
          />
        </svg>
        <h1>4.97 263 Reviews</h1>
      </div>
      <div className="rangedisplay">
        <div className="rangedisplay-left">
          <div className="one">
            <p>Cleanliness</p>
            <div className="one">
              <span className="rating1" />
              <p>4.9</p>
            </div>
          </div>
          <div className="one ">
            <p>Communication</p>
            <div className="one">
              <span className="rating1" />
              <p>5.0</p>
            </div>
          </div>
          <div className="one">
            <p>Check-in </p>
            <div className="one">
              <span className="rating1" />
              <p>5.0</p>
            </div>
          </div>
        </div>
        <div className="rangedisplay-right">
          <div className="one">
            <p>Cleanliness</p>
            <div className="one">
              <span className="rating1" />
              <p>4.9</p>
            </div>
          </div>
          <div className="one">
            <p>Communication</p>
            <div className="one">
              <span className="rating1" />
              <p>5.0</p>
            </div>
          </div>
          <div className="one">
            <p>Check-in </p>
            <div className="one">
              <span className="rating1" />
              <p>5.0</p>
            </div>
          </div>
        </div>
      </div>
      {/* Comment section */}
      <section className="comment">
        <div className="comment-left">
          <div>
            <div className="firstcomment">
              <img
                src="https://a0.muscache.com/im/users/8717030/profile_pic/1405644603/original.jpg?im_w=240"
                alt=""
              />
              <div className="name">
                <p>Andrew</p>
                <p className="date">January 2023</p>
              </div>
            </div>
            <p>
              Best stay of our life! Incredible hosts, and most amazing house!
              So clean, so comfortable, so walkable, will stay here every time
              we are in Chiang Mai!
            </p>
          </div>
          <div>
            <div className="firstcomment">
              <img
                src="https://a0.muscache.com/im/pictures/user/500ef67e-f0b9-4003-b63d-d27ce7dbc950.jpg?im_w=240"
                alt=""
              />
              <div className="name">
                <p>Wendy</p>
                <p className="date">January 2023</p>
              </div>
            </div>
            <p>
              Wow! This was just the best Airbnb ever. Fantastic house with
              loads of space, the most incredible Thai food for breakfast each
              morning and absolutely unbeatable hospitality. Thank
            </p>
          </div>
          <div>
            <div className="firstcomment">
              <img
                src="https://a0.muscache.com/im/pictures/user/bd136f22-d612-4c3a-b740-1879660860fd.jpg?im_w=240"
                alt=""
              />
              <div className="name">
                <p>Bethany</p>
                <p className="date">December 2022</p>
              </div>
            </div>
            <p>
              I wish we stayed for longer - the property is in such a beautiful
              area, so close to the main sections of Chiangmai but so peaceful
              and quiet. It felt like a proper community - the hosts
            </p>
          </div>
        </div>
        <div className="comment-right">
          <div>
            <div className="firstcomment">
              <img
                src="https://a0.muscache.com/im/pictures/user/c29aef0f-ec9c-4ebf-b04d-7884cdb39092.jpg?im_w=240"
                alt=""
              />
              <div className="name">
                <p>Kevin</p>
                <p className="date">January 2023</p>
              </div>
            </div>
            <p>
              Very kind and communicative hosts. Great location near old town.
              House was very clean and had everything we needed .
            </p>
          </div>
          <div>
            <div className="firstcomment">
              <img
                src="https://a0.muscache.com/im/users/662013/profile_pic/1442005400/original.jpg?im_w=240"
                alt=""
              />
              <div className="name">
                <p>Jeff</p>
                <p className="date">January 2023</p>
              </div>
            </div>
            <p>
              Our family of 5 stayed here for 3 weeks and it was amazing.
              Couldn't be happier with both the place and the people.
              Communication was fantastic before we arrived and during.
            </p>
          </div>
          <div>
            <div className="firstcomment">
              <img
                src="https://a0.muscache.com/im/pictures/user/ed61f655-d858-41ee-8441-a65963614f4b.jpg?im_w=240"
                alt=""
              />
              <div className="name">
                <p>Michael</p>
                <p className="date">January 2023</p>
              </div>
            </div>
            <p>
              a phenomenal experience. beautiful large wooden house with
              comfortable beds and great air conditioning. close to a few small
              restaurants and walking distance to the busy areas.
            </p>
          </div>
        </div>
      </section>
      <button className="btnall">Show all 63 amenities</button>
      <hr />
    </div>
  </div>
</>




</>
   
  );
}

export default App;
