import Desk from "../../Desk";
import { Link } from "react-router-dom";

const H_ZoneChart = ({ data }) => {
  return (
    <div>
      <div className="border-2 m-2 border-slate-400 rounded p-2 grid grid-cols-10 grid-rows-8 w-[500px] my-2 mx-auto gap-2.5 text-center">
        <div className="restroom rounded-sm bg-gray-300 col-start-1 col-end-4 grid place-content-center">
          <p>Restroom</p>
        </div>
        {/* Desk_id: #22-30 */}
        <div className="ocpd1  col-start-5 col-end-7 row-start-1 row-end-9 flex justify-center">
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data} desk_id="H0022" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0021" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0020" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0019" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0018" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0017" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0016" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0015" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0023" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0024" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0025" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0026" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0027" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0028" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0029" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0030" />
            </div>
          </div>
        </div>
        {/* Desk_id: #34-31 */}
        <div className="ocpd3  col-start-8 col-end-9 row-start-3 row-end-9 flex flex-col place-items-center">
          <div className="rotate-90">
            <Desk data={data} desk_id="H0036" />
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="H0035" />
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="H0034" />
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="H0033" />
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="H0032" />
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="H0031" />
          </div>
        </div>
        <div className="zonei rounded-sm grid place-items-center bg-[#e9f9fd] col-start-9 col-end-11 row-start-1 row-end-9">
          <Link to={"/zones/zone_is"}>
            <div>
              <p>Zone I</p>
              <svg
                className="h-7 w-7 ml-2"
                viewBox="0 -6.5 36 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-212.000000, -159.000000)"
                    fill="#252528"
                    fillRule="nonzero"
                  >
                    <g
                      id="square-filled"
                      transform="translate(50.000000, 120.000000)"
                    >
                      <path
                        d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                        id="right-arrow"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        </div>
        {/* Desk_id: #1-14 */}
        <div className="ocpd4  col-start-2 col-end-4 row-start-2 row-end-9 flex justify-center">
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data} desk_id="H0007" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0006" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0005" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0004" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0003" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0002" />
            </div>
            <div className="rotate-90">
              <Desk data={data} desk_id="H0001" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0008" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0009" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0010" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0011" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0012" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0013" />
            </div>
            <div className="-rotate-90">
              <Desk data={data} desk_id="H0014" />
            </div>
          </div>
        </div>
        <div className="Door flex self-end mb-[-10px] col-start-4 col-end-5 row-start-8 row-end-9">
          {/* door */}
          <svg
            className="w-7 h-7 text-slate-500"
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>door</title>
            <path d="M30 28.75h-2.779v-26.75c-0-0.69-0.56-1.25-1.25-1.25h-19.971c-0.69 0-1.25 0.56-1.25 1.25v0 26.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM7.25 28.75v-25.5h17.471v25.5zM21.48 14.84c-0.138-0.057-0.299-0.089-0.467-0.089-0.349 0-0.665 0.141-0.894 0.37l0-0c-0.232 0.222-0.377 0.534-0.379 0.88v0c0.004 0.174 0.041 0.338 0.103 0.489l-0.003-0.009c0.066 0.157 0.161 0.291 0.279 0.4l0.001 0.001c0.219 0.234 0.529 0.38 0.874 0.38 0.002 0 0.005 0 0.007-0h-0c0.174-0.005 0.339-0.041 0.489-0.104l-0.009 0.003c0.3-0.143 0.537-0.379 0.676-0.671l0.004-0.009c0.058-0.142 0.094-0.306 0.1-0.477l0-0.002c-0.002-0.346-0.148-0.658-0.38-0.879l-0-0c-0.109-0.119-0.241-0.214-0.391-0.278l-0.007-0.003z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default H_ZoneChart;
