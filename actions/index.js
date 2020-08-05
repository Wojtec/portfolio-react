import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const URL = 'http://localhost:3000/api/v1/secret';

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
    
    return token ? ( { headers: {'Authorization': `Bearer ${token}`}} ) : ( undefined );

}

export const getSecretData = async (req) => {

    return await axios.get(URL, setAuthHeader(req)).then(response => response.data);
}
