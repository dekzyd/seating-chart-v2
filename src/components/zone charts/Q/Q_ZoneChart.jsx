import Desk from "../../Desk";
import { Link } from "react-router-dom";

const Q_ZoneChart = ({ data }) => {
  return (
    <div>
      <div className="ZoneQ border-2 m-2 border-slate-400 rounded p-2 w-[950px] mx-auto my-2 grid grid-cols-23 grid-rows-11 gap-2 text-center">
        <div className="restroom1 rounded-sm grid place-content-center bg-gray-300 col-start-1 col-end-3 row-start-1 row-end-2">
          Restroom 1
        </div>
        <div className="ocpd1  col-start-5 col-end-18 row-start-1 row-end-2 flex justify-center">
          {/* ocpd1 */}
          <Desk data={data[62]} desk_id="Q0063" />
          <Desk data={data[61]} desk_id="Q0062" />
          <Desk data={data[60]} desk_id="Q0061" />
          <Desk data={data[59]} desk_id="Q0060" />
          <Desk data={data[58]} desk_id="Q0059" />
          <Desk data={data[57]} desk_id="Q0058" />
          <Desk data={data[56]} desk_id="Q0057" />
          <Desk data={data[55]} desk_id="Q0056" />
          <Desk data={data[54]} desk_id="Q0055" />
          <Desk data={data[53]} desk_id="Q0054" />
          <Desk data={data[52]} desk_id="Q0053" />
        </div>
        <div className="restroom2 rounded-sm grid place-content-center bg-gray-300 col-start-20 col-end-22 row-start-1 row-end-2">
          Restroom 2
        </div>
        <div className="occupied2  col-start-3 col-end-7 row-start-3 row-end-5 flex flex-col place-content-center">
          {/* #15-94 */}
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[90]} style="-scale-x-100" desk_id="Q0091" />
            <Desk data={data[91]} style="-scale-x-100" desk_id="Q0092" />
            <Desk data={data[92]} style="-scale-x-100" desk_id="Q0093" />
            <Desk data={data[93]} style="-scale-x-100" desk_id="Q0094" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[28]} desk_id="Q0029" />
            <Desk data={data[29]} desk_id="Q0030" />
            <Desk data={data[30]} desk_id="Q0031" />
            <Desk data={data[31]} desk_id="Q0032" />
          </div>
        </div>
        {/* Desk_id: #52-63 */}
        <div className="occupied3  col-start-9 col-end-14 row-start-3 row-end-5 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[51]} style="-scale-x-100" desk_id="Q0052" />
            <Desk data={data[50]} style="-scale-x-100" desk_id="Q0051" />
            <Desk data={data[49]} style="-scale-x-100" desk_id="Q0050" />
            <Desk data={data[48]} style="-scale-x-100" desk_id="Q0049" />
            <Desk data={data[47]} style="-scale-x-100" desk_id="Q0048" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[42]} desk_id="Q0043" />
            <Desk data={data[43]} desk_id="Q0044" />
            <Desk data={data[44]} desk_id="Q0045" />
            <Desk data={data[45]} desk_id="Q0046" />
            <Desk data={data[46]} desk_id="Q0047" />
          </div>
        </div>
        {/* Desk_id: #33-42 */}
        <div className="occupied7  col-start-9 col-end-14 row-start-6 row-end-8 flex flex-col place-content-center">
          {/* ocpd7 */}
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[41]} style="-scale-x-100" desk_id="Q0042" />
            <Desk data={data[40]} style="-scale-x-100" desk_id="Q0041" />
            <Desk data={data[39]} style="-scale-x-100" desk_id="Q0040" />
            <Desk data={data[38]} style="-scale-x-100" desk_id="Q0039" />
            <Desk data={data[37]} style="-scale-x-100" desk_id="Q0038" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[32]} desk_id="Q0033" />
            <Desk data={data[33]} desk_id="Q0034" />
            <Desk data={data[34]} desk_id="Q0035" />
            <Desk data={data[35]} desk_id="Q0036" />
            <Desk data={data[36]} desk_id="Q0037" />
          </div>
        </div>
        {/* Desk_id: #64-71 */}
        <div className="ocpd4 col-start-15 col-end-17 row-start-3 row-end-8 flex justify-center">
          {/* ocpd4 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[63]} desk_id="Q0064" />
            </div>
            <div className="rotate-90">
              <Desk data={data[64]} desk_id="Q0065" />
            </div>
            <div className="rotate-90">
              <Desk data={data[65]} desk_id="Q0066" />
            </div>
            <div className="rotate-90">
              <Desk data={data[66]} desk_id="Q0067" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[70]} desk_id="Q0071" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[69]} desk_id="Q0070" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[68]} desk_id="Q0069" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[67]} desk_id="Q0068" />
            </div>
          </div>
        </div>
        {/* Desk_id: #72-79 */}
        <div className="ocpd5  col-start-18 col-end-20 row-start-3 row-end-8 flex justify-center">
          {/* ocpd5 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[71]} desk_id="Q0072" />
            </div>
            <div className="rotate-90">
              <Desk data={data[72]} desk_id="Q0073" />
            </div>
            <div className="rotate-90">
              <Desk data={data[73]} desk_id="Q0074" />
            </div>
            <div className="rotate-90">
              <Desk data={data[74]} desk_id="Q0075" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[78]} desk_id="Q0079" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[77]} desk_id="Q0078" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[76]} desk_id="Q0077" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[75]} desk_id="Q0076" />
            </div>
          </div>
        </div>
        {/* Desk_id: #81-82 */}
        <div className="occupied6  col-start-21 col-end-22 row-start-4 row-end-6 flex flex-col place-items-center">
          {/* ocpd6 */}
          <div className="rotate-90">
            <Desk data={data[79]} desk_id="Q0080" />
          </div>
          <div className="rotate-90">
            <Desk data={data[80]} desk_id="Q0081" />
          </div>
        </div>
        {/* Desk_id: #17-28 */}
        <div className="ocpd8  col-start-1 col-end-3 row-start-6 row-end-12 flex justify-center">
          {/* ocpd8 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[27]} desk_id="Q0028" />
            </div>
            <div className="rotate-90">
              <Desk data={data[26]} desk_id="Q0027" />
            </div>
            <div className="rotate-90">
              <Desk data={data[25]} desk_id="Q0026" />
            </div>
            <div className="rotate-90">
              <Desk data={data[24]} desk_id="Q0025" />
            </div>
            <div className="rotate-90">
              <Desk data={data[23]} desk_id="Q0024" />
            </div>
            <div className="rotate-90">
              <Desk data={data[22]} desk_id="Q0023" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[16]} desk_id="Q0017" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[17]} desk_id="Q0018" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[18]} desk_id="Q0019" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[19]} desk_id="Q0020" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[20]} desk_id="Q0021" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[21]} desk_id="Q0022" />
            </div>
          </div>
        </div>
        {/* Desk_id: #7-16 */}
        <div className="ocpd9  col-start-4 col-end-6 row-start-7 row-end-12 flex justify-center">
          {/* ocpd9 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[15]} desk_id="Q0016" />
            </div>
            <div className="rotate-90">
              <Desk data={data[14]} desk_id="Q0015" />
            </div>
            <div className="rotate-90">
              <Desk data={data[13]} desk_id="Q0014" />
            </div>
            <div className="rotate-90">
              <Desk data={data[12]} desk_id="Q0013" />
            </div>
            <div className="rotate-90">
              <Desk data={data[11]} desk_id="Q0012" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[6]} desk_id="Q0007" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[7]} desk_id="Q0008" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[8]} desk_id="Q0009" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[9]} desk_id="Q0010" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[10]} desk_id="Q0011" />
            </div>
          </div>
        </div>
        {/* Desk_id: #1-6 */}
        <div className="ocpd10 col-start-6 col-end-8 row-start-6 row-end-12 flex flex-col place-items-center">
          {/* ocpd10 */}
          <div className="rotate-90">
            <Desk data={data[5]} desk_id="Q0006" />
          </div>
          <div className="rotate-90">
            <Desk data={data[4]} desk_id="Q0005" />
          </div>
          <div className="rotate-90">
            <Desk data={data[3]} desk_id="Q0004" />
          </div>
          <div className="rotate-90">
            <Desk data={data[2]} desk_id="Q0003" />
          </div>
          <div className="rotate-90">
            <Desk data={data[1]} desk_id="Q0002" />
          </div>
          <div className="rotate-90">
            <Desk data={data[0]} desk_id="Q0001" />
          </div>
        </div>
        {/* Desk_id: #85-90 */}
        <div className="ocpd11  col-start-9 col-end-12 row-start-9 row-end-12 flex justify-center">
          {/* ocpd11 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[87]} desk_id="Q0088" />
            </div>
            <div className="rotate-90">
              <Desk data={data[88]} desk_id="Q0089" />
            </div>
            <div className="rotate-90">
              <Desk data={data[89]} desk_id="Q0090" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[86]} desk_id="Q0087" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[85]} desk_id="Q0086" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[84]} desk_id="Q0085" />
            </div>
          </div>
        </div>
        {/* Desk_id: #82-84 */}
        <div className="ocpd12  col-start-13 col-end-14 row-start-9 row-end-12 flex flex-col place-items-center">
          {/* ocpd12 */}
          <div className="rotate-90">
            <Desk data={data[81]} desk_id="Q0082" />
          </div>
          <div className="rotate-90">
            <Desk data={data[82]} desk_id="Q0083" />
          </div>
          <div className="rotate-90">
            <Desk data={data[83]} desk_id="Q0084" />
          </div>
        </div>
        <div className="zoner rounded-sm grid place-items-center bg-[#e9f9fd] col-start-14 col-end-22 row-start-9 row-end-12">
          {/* Zone R */}
          <Link to={"/zones/zone_rs"}>
            <div>
              <p>Zone R</p>
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
        <div className="Door flex self-end mb-[-10px] col-start-3 col-end-5 row-start-11 row-end-12">
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

export default Q_ZoneChart;
