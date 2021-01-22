import React from 'react';

interface IProps {
  id: number;
}

const PosterGraphics: React.FC<IProps> = ({ id }) => {
  let graphics;

  switch (id) {
    case 1:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#506485' }}
        >
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".15"
                fill="#000"
                cx="282.882"
                cy="282.882"
                r="282.882"
              />
              <path
                fillOpacity=".15"
                fill="#000"
                d="M82.937 82.897h399.886v399.967H82.937z"
              />
              <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z" />
            </g>
          </svg>
        </div>
      );
      break;

    case 2:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#c4519d' }}
        >
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".15"
                fill="#000"
                cx="282.882"
                cy="282.882"
                r="282.882"
              />
              <circle
                fillOpacity=".15"
                fill="#000"
                cx="282.861"
                cy="282.861"
                r="207.861"
              />
              <circle
                fillOpacity=".15"
                fill="#000"
                cx="283.212"
                cy="283.212"
                r="134.212"
              />
              <circle fill="#F4F1D0" cx="283.213" cy="283.213" r="60.213" />
            </g>
          </svg>
        </div>
      );
      break;

    case 3:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#7bb24d' }}
        >
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#F4F1D0" strokeWidth="30" fill="none" fillRule="evenodd">
              <circle cx="282.882" cy="282.882" r="267.882" />
              <circle cx="282.861" cy="282.861" r="192.861" />
              <circle cx="283.212" cy="283.212" r="119.212" />
              <circle cx="283.213" cy="283.213" r="45.213" />
            </g>
          </svg>
        </div>
      );
      break;

    case 4:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#4897be' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
            <circle cx="34" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="199" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="283" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="365" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="34" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="34" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="199" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="283" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="365" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="117" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="34" cy="199" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="199" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="199" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="199" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="34" cy="282" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="282" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="282" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="282" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="34" cy="365" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="365" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="365" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="365" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="34" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="199" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="283" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="365" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="448" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="34" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="118" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="199" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="283" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="365" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="449" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <circle cx="531" cy="530" r="34" fill="#000" fillOpacity=".2" />
            <path
              fill="#F4F1D0"
              fillRule="nonzero"
              d="M317 248h-68v68h68v-68zm-22 46h-25v-25h25v25zm91-22.88889v-22.77778h-22.77778v-22.77777c0-12.52778-10.25-22.77778-22.77778-22.77778h-22.77777V180h-22.77778v22.77778H272.1111V180h-22.77778v22.77778h-22.77777c-12.52778 0-22.77778 10.25-22.77778 22.77778v22.77777H181v22.77778h22.77778v22.77778H181v22.77778h22.77778v22.77777c0 12.52778 10.25 22.77778 22.77778 22.77778h22.77777V385h22.77778v-22.77778h22.77778V385h22.77778v-22.77778h22.77777c12.52778 0 22.77778-10.25 22.77778-22.77778v-22.77777H386v-22.77778h-22.77778V271.1111H386zM341 340H225V224h116v116z"
            />
          </svg>
        </div>
      );
      break;

    case 5:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#d6c230' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 563">
            <g fill="none" fillRule="evenodd" stroke="#F4F1D0" strokeWidth="30">
              <path d="M15 98h454v450H15z" />
              <path d="M98 15h454v450H98z" />
            </g>
          </svg>
        </div>
      );
      break;

    case 6:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#49a46d' }}
        >
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fillOpacity=".1" fill="#000" d="M0 0h566v566H0z" />
              <path fillOpacity=".1" fill="#000" d="M40 40h486v486H40z" />
              <path fillOpacity=".1" fill="#000" d="M80 80h406v406H80z" />
              <circle fillOpacity=".2" fill="#000" cx="168" cy="168" r="48" />
              <circle fillOpacity=".2" fill="#000" cx="284" cy="168" r="48" />
              <circle fillOpacity=".2" fill="#000" cx="398" cy="168" r="48" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="167.209"
                cy="282.437"
                r="47.247"
              />
              <circle fill="#F4F1D0" cx="283.936" cy="282.437" r="47.247" />
              <circle fillOpacity=".2" fill="#000" cx="398" cy="282" r="48" />
              <circle fillOpacity=".2" fill="#000" cx="168" cy="398" r="48" />
              <circle fillOpacity=".2" fill="#000" cx="284" cy="398" r="48" />
              <circle fillOpacity=".2" fill="#000" cx="398" cy="398" r="48" />
            </g>
          </svg>
        </div>
      );
      break;

    case 7:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#f27eac' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 507">
            <path
              d="M77.5218237,15.8098047 L18.2743646,118.429414 L77.5218237,221.049023 L196.016742,221.049023 L255.264201,118.429414 L196.016742,15.8098047 L77.5218237,15.8098047 Z M68.8615697,0.809804688 L204.676996,0.809804688 L272.584709,118.429414 L204.676996,236.049023 L68.8615697,236.049023 L0.953856568,118.429414 L68.8615697,0.809804688 Z M71,1 L205,1 L205,236 L71,236 L71,1 Z M86,16 L86,221 L190,221 L190,16 L86,16 Z M14.9246324,126 L14.9246324,111 L260.089469,111 L260.089469,126 L14.9246324,126 Z M272,118.5 L68,236 L124.328358,118.5 L68,1 L272,118.5 Z M102.44341,38.148972 L140.962912,118.5 L102.44341,198.851028 L241.946471,118.5 L102.44341,38.148972 Z M1,118.5 L205,1 L146,118.5 L205,236 L1,118.5 Z M169.156836,198.044797 L129.215193,118.5 L169.156836,38.9552028 L31.0535285,118.5 L169.156836,198.044797 Z"
              fill="#F4F1D0"
              fillRule="nonzero"
            />
            <path
              d="M372.521824,15.8098047 L313.274365,118.429414 L372.521824,221.049023 L491.016742,221.049023 L550.264201,118.429414 L491.016742,15.8098047 L372.521824,15.8098047 Z M363.86157,0.809804688 L499.676996,0.809804688 L567.584709,118.429414 L499.676996,236.049023 L363.86157,236.049023 L295.953857,118.429414 L363.86157,0.809804688 Z M366,1 L500,1 L500,236 L366,236 L366,1 Z M381,16 L381,221 L485,221 L485,16 L381,16 Z M309.924632,126 L309.924632,111 L555.089469,111 L555.089469,126 L309.924632,126 Z"
              fill="#F4F1D0"
              fillRule="nonzero"
            />
            <path
              d="M73.1916967,278.309805 L200.346869,278.309805 L263.924455,388.429414 L200.346869,498.549023 L73.1916967,498.549023 L9.61411061,388.429414 L73.1916967,278.309805 Z M200.346869,278.309805 L73.1916967,278.309805 L9.61411061,388.429414 L73.1916967,498.549023 L200.346869,498.549023 L263.924455,388.429414 L200.346869,278.309805 Z"
              stroke="#F4F1D0"
              strokeWidth="15"
              fillRule="nonzero"
            />
            <circle
              stroke="#F4F1D0"
              strokeWidth="15"
              cx="432.5"
              cy="388.5"
              r="110"
              fill="none"
            />
          </svg>
        </div>
      );
      break;

    case 8:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#ea7e38' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 516">
            <g fill="none" fillRule="evenodd">
              <circle cx="55.5" cy="55.5" r="55.5" fill="#F4F1D0" />
              <circle cx="190.5" cy="55.5" r="55.5" fill="#F4F1D0" />
              <circle cx="325.5" cy="55.5" r="55.5" fill="#F4F1D0" />
              <circle
                cx="510.5"
                cy="55.5"
                r="55.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="55.5" cy="190.5" r="55.5" fill="#F4F1D0" />
              <circle cx="190.5" cy="190.5" r="55.5" fill="#F4F1D0" />
              <circle cx="325.5" cy="190.5" r="55.5" fill="#F4F1D0" />
              <circle
                cx="510.5"
                cy="190.5"
                r="55.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="55.5" cy="325.5" r="55.5" fill="#F4F1D0" />
              <circle cx="190.5" cy="325.5" r="55.5" fill="#F4F1D0" />
              <circle cx="325.5" cy="325.5" r="55.5" fill="#F4F1D0" />
              <circle
                cx="510.5"
                cy="325.5"
                r="55.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="55.5" cy="460.5" r="55.5" fill="#F4F1D0" />
              <circle cx="190.5" cy="460.5" r="55.5" fill="#F4F1D0" />
              <circle cx="325.5" cy="460.5" r="55.5" fill="#F4F1D0" />
              <circle
                cx="510.5"
                cy="460.5"
                r="55.5"
                fill="#000"
                fillOpacity=".2"
              />
            </g>
          </svg>
        </div>
      );
      break;

    case 9:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#80495e' }}
        >
          <svg viewBox="0 0 566 565" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#F4F1D0" cx="48.5" cy="48.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="166.5"
                cy="48.5"
                r="48.5"
              />
              <circle fill="#F4F1D0" cx="283.5" cy="48.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="400.5"
                cy="48.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="517.5"
                cy="48.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="48.5"
                cy="165.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="166.5"
                cy="165.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="283.5"
                cy="165.5"
                r="48.5"
              />
              <circle fill="#F4F1D0" cx="400.5" cy="165.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="517.5"
                cy="165.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="48.5"
                cy="282.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="166.5"
                cy="282.5"
                r="48.5"
              />
              <circle fill="#F4F1D0" cx="283.5" cy="282.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="400.5"
                cy="282.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="517.5"
                cy="282.5"
                r="48.5"
              />
              <circle fill="#F4F1D0" cx="48.5" cy="399.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="166.5"
                cy="399.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="283.5"
                cy="399.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="400.5"
                cy="399.5"
                r="48.5"
              />
              <circle fill="#F4F1D0" cx="517.5" cy="399.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="48.5"
                cy="516.5"
                r="48.5"
              />
              <circle fill="#F4F1D0" cx="166.5" cy="516.5" r="48.5" />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="283.5"
                cy="516.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="400.5"
                cy="516.5"
                r="48.5"
              />
              <circle
                fillOpacity=".2"
                fill="#000"
                cx="517.5"
                cy="516.5"
                r="48.5"
              />
            </g>
          </svg>
        </div>
      );
      break;

    case 10:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#819dd6' }}
        >
          <svg viewBox="0 0 576 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                stroke="#F4F1D0"
                strokeWidth="3"
                cx="282.882"
                cy="282.882"
                r="281.382"
              />
              <circle fill="#F4F1D0" cx="179" cy="22" r="12" />
              <circle fill="#F4F1D0" cx="564" cy="271" r="12" />
              <circle fill="#F4F1D0" cx="37" cy="417" r="12" />
              <circle
                stroke="#F4F1D0"
                strokeWidth="3"
                cx="282.861"
                cy="282.861"
                r="206.361"
              />
              <circle fill="#F4F1D0" cx="80" cy="247" r="12" />
              <circle fill="#F4F1D0" cx="343" cy="86" r="12" />
              <circle fill="#F4F1D0" cx="383" cy="464" r="12" />
              <circle
                stroke="#F4F1D0"
                strokeWidth="3"
                cx="283.212"
                cy="283.212"
                r="132.712"
              />
              <circle fill="#F4F1D0" cx="403" cy="343" r="12" />
              <circle fill="#F4F1D0" cx="223" cy="402" r="12" />
              <circle fill="#F4F1D0" cx="223" cy="165" r="12" />
              <circle
                stroke="#F4F1D0"
                strokeWidth="3"
                cx="283.213"
                cy="283.213"
                r="58.713"
              />
              <circle fill="#F4F1D0" cx="324" cy="240" r="12" />
              <circle fill="#F4F1D0" cx="294" cy="340" r="12" />
              <circle fill="#F4F1D0" cx="226" cy="271" r="12" />
            </g>
          </svg>
        </div>
      );
      break;

    case 11:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#f35e4e' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
            <g fill="none" fillRule="evenodd">
              <circle cx="34" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="118" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="199" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="283" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="365" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="449" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="531" cy="34" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="34" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="118" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="199" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="283" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="365" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="449" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="531" cy="117" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="34" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="118" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="199" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="283" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="365" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="449" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="531" cy="199" r="34" fill="#000" fillOpacity=".2" />
              <circle
                cx="34"
                cy="282"
                r="34"
                fill="#F4F1D0"
                fillOpacity=".25"
              />
              <circle
                cx="118"
                cy="282"
                r="34"
                fill="#F4F1D0"
                fillOpacity=".5"
              />
              <circle cx="199" cy="282" r="34" fill="#F4F1D0" />
              <circle cx="283" cy="282" r="34" fill="#F4F1D0" />
              <circle cx="365" cy="282" r="34" fill="#F4F1D0" />
              <circle
                cx="449"
                cy="282"
                r="34"
                fill="#F4F1D0"
                fillOpacity=".5"
              />
              <circle
                cx="531"
                cy="282"
                r="34"
                fill="#F4F1D0"
                fillOpacity=".25"
              />
              <circle cx="34" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="118" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="199" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="283" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="365" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="449" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="531" cy="365" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="34" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="118" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="199" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="283" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="365" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="449" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="531" cy="448" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="34" cy="530" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="118" cy="530" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="199" cy="530" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="283" cy="530" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="365" cy="530" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="449" cy="530" r="34" fill="#000" fillOpacity=".2" />
              <circle cx="531" cy="530" r="34" fill="#000" fillOpacity=".2" />
            </g>
          </svg>
        </div>
      );
      break;

    case 12:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#b54a48' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
            <g fill="none" fillRule="evenodd">
              <path fillOpacity=".1" fill="#000" d="M1 0h270v270H1z" />
              <circle fillOpacity=".15" fill="#000" cx="100" cy="100" r="100" />
              <circle fillOpacity=".15" fill="#000" cx="171" cy="100" r="100" />
              <circle fillOpacity=".15" fill="#000" cx="101" cy="170" r="100" />
              <circle fillOpacity=".15" fill="#000" cx="171" cy="170" r="100" />
              <path fillOpacity=".1" fill="#000" d="M295 0h270v270H295z" />
              <circle fillOpacity=".15" fill="#000" cx="430" cy="100" r="100" />
              <circle fillOpacity=".15" fill="#000" cx="395" cy="170" r="100" />
              <circle fillOpacity=".15" fill="#000" cx="465" cy="170" r="100" />
              <path fillOpacity=".1" fill="#000" d="M1 294h270v270H1z" />
              <circle fillOpacity=".15" fill="#000" cx="101" cy="394" r="100" />
              <circle fillOpacity=".15" fill="#000" cx="171" cy="464" r="100" />
              <path fillOpacity=".1" fill="#000" d="M295 294h270v270H295z" />
              <circle fill="#F4F1D0" cx="430" cy="429" r="100" />
            </g>
          </svg>
        </div>
      );
      break;

    case 13:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#37abbf' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
            <g fill="none" fillRule="evenodd">
              <circle cx="48.5" cy="48.5" r="48.5" fill="#F4F1D0" />
              <circle
                cx="166.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="166.5" cy="165.5" r="48.5" fill="#F4F1D0" />
              <circle
                cx="283.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0" />
              <circle
                cx="400.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="400.5" cy="399.5" r="48.5" fill="#F4F1D0" />
              <circle
                cx="517.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0" />
            </g>
          </svg>
        </div>
      );
      break;

    case 14:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#beaa48' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598 597">
            <g
              fill="none"
              fillRule="evenodd"
              transform="rotate(-45 293.76881 309.77343)"
            >
              <circle cx="305.5" cy="305.5" r="54.5" fill="#000" opacity=".2" />
              <path
                fill="#F4F1D0"
                fillRule="nonzero"
                stroke="#F4F1D0"
                strokeWidth="5"
                d="M558 251l-9.69375 9.69375 38.3625 38.43125H503v13.75h83.66875l-38.3625 38.43125L558 361l55-55zM55 362l9.69375-9.69375-38.3625-38.43125H110v-13.75H26.33125l38.3625-38.43125L55 252 0 307zM251 55l9.69375 9.69375 38.43125-38.3625V110h13.75V26.33125l38.43125 38.3625L361 55 306 0zM362 557l-9.69375-9.69375-38.43125 38.3625V502h-13.75v83.66875l-38.43125-38.3625L252 557l55 55z"
              />
              <path
                fill="#F4F1D0"
                fillRule="nonzero"
                d="M114 115v381h383V115H114zM94 95h423v421H94V95z"
              />
            </g>
          </svg>
        </div>
      );
      break;

    case 15:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#307ec7' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
            <g fill="none" fillRule="evenodd">
              <circle
                cx="48.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="48.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="165.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0" />
              <circle
                cx="400.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="282.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="517.5"
                cy="399.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="48.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="166.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="283.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle
                cx="400.5"
                cy="516.5"
                r="48.5"
                fill="#000"
                fillOpacity=".2"
              />
              <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0" />
            </g>
          </svg>
        </div>
      );
      break;

    case 16:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#4fa852' }}
        >
          <svg viewBox="0 0 567 580" xmlns="http://www.w3.org/2000/svg">
            <g fill="#F4F1D0" fillRule="evenodd">
              <path d="M94.5 145L0 0h189z" />
              <path d="M283.5 145L189 0h189z" />
              <path d="M472.5 145L378 0h189z" />
              <path fillOpacity=".8" d="M94.5 290L0 145h189z" />
              <path fillOpacity=".8" d="M283.5 290L189 145h189z" />
              <path fillOpacity=".8" d="M472.5 290L378 145h189z" />
              <path fillOpacity=".6" d="M94.5 435L0 290h189z" />
              <path fillOpacity=".6" d="M283.5 435L189 290h189z" />
              <path fillOpacity=".6" d="M472.5 435L378 290h189z" />
              <path fillOpacity=".4" d="M94.5 580L0 435h189z" />
              <path fillOpacity=".4" d="M283.5 580L189 435h189z" />
              <path fillOpacity=".4" d="M472.5 580L378 435h189z" />
            </g>
          </svg>
        </div>
      );
      break;

    case 17:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#8959a9' }}
        >
          <svg viewBox="0 0 566 569" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect fill="#F4F1D0" x="0" y="0" width="122" height="122" />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="0"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="0"
              y="298"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="298"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="298"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="298"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="0"
              y="447"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="447"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="447"
              width="122"
              height="122"
            />
            <rect fill="#F4F1D0" x="444" y="447" width="122" height="122" />
          </svg>
        </div>
      );
      break;

    case 18:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#6fc9b6' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 490">
            <g fill="#F4F1D0" fillRule="evenodd">
              <path
                fillRule="nonzero"
                d="M412.46218 20.76492l-259.60061-.35855L23.427 244.59363l130.11082 224.64145 259.60061.35855L542.573 245.40637 412.46218 20.76492zM424 .78084l141.67622 244.60958-141 244.21916L142 489.21916.32378 244.60958l141-244.21916L424 .78084z"
              />
              <path
                fillRule="nonzero"
                d="M564 245.5L146 490l129.5-244.5L146 1l418 244.5zM196.57184 53.75106L298.1321 245.5 196.57184 437.24894 524.38803 245.5 196.57182 53.75106zM2 245.5L426 1 295 245.5 426 490 2 245.5zm373.26538 192.15681L272.3102 245.5 375.26538 53.34319 42.03638 245.5l333.229 192.15681z"
              />
              <path d="M166 21v449h240V21H166zM146 1h280v489H146V1z" />
              <path d="M11 256.5v-20h545.00595v20z" />
            </g>
          </svg>
        </div>
      );
      break;

    case 19:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#74a679' }}
        >
          <svg viewBox="0 0 566 569" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="0"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="0"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="149"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="0"
              y="298"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="298"
              width="122"
              height="122"
            />
            <circle id="oval" fill="#F4F1D0" cx="356" cy="359" r="61" />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="298"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="0"
              y="447"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="148"
              y="447"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="295"
              y="447"
              width="122"
              height="122"
            />
            <rect
              fill="#000000"
              opacity="0.2"
              x="444"
              y="447"
              width="122"
              height="122"
            />
          </svg>
        </div>
      );
      break;

    case 20:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#42928c' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 566">
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="0"
              width="566"
              height="68"
            />
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="83"
              width="566"
              height="68"
            />
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="166"
              width="566"
              height="68"
            />
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="249"
              width="566"
              height="68"
            />
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="332"
              width="566"
              height="68"
            />
            <rect
              fillOpacity="0.2"
              fill="#000000"
              x="0"
              y="415"
              width="566"
              height="68"
            />
            <rect fill="#F4F1D0" x="0" y="498" width="295" height="68" />
          </svg>
        </div>
      );
      break;

    default:
      graphics = (
        <div
          className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
          style={{ backgroundColor: '#506485' }}
        >
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".15"
                fill="#000"
                cx="282.882"
                cy="282.882"
                r="282.882"
              />
              <path
                fillOpacity=".15"
                fill="#000"
                d="M82.937 82.897h399.886v399.967H82.937z"
              />
              <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z" />
            </g>
          </svg>
        </div>
      );
      break;
  }

  return graphics;
};

export default PosterGraphics;
