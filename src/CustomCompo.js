import CompoOne from "./CompoOne";
import CompoTwo from './CompoTwo'

import CompoThree from "./CompoThree";
function CustomCompo(){
    return (
        <div>
            <CompoOne headingText ="Register here..."/>
            <CompoTwo/>
            <CompoThree buttonText ="Submit"/>
          

        </div>

    );
};
export default CustomCompo;