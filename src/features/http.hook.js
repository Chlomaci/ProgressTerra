const useHttp = () => {
    const getToken = async (url ='http://84.201.188.117:5021/api/v3/clients/accesstoken', method = 'POST', headers = {'Content-Type': 'application/json', 
            'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c'}) => {
        try {
            const response = await fetch(url, {method, body: JSON.stringify(
                {
                    "idClient": "2c44d8c2-c89a-472e-aab3-9a8a29142315",
                    "accessToken": "",
                    "paramName": "device",
                    "paramValue": "7db72635-fd0a-46b9-813b-1627e3aa02ea",
                    "latitude": 0,
                    "longitude": 0,
                    "sourceQuery": 0
                  }
                  ), headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            const accessToken = data.accessToken;
            console.log('accessToken is ' + accessToken)
            return accessToken
        } catch(e) {
            console.log(e)
            alert('Не сработало. Кажется, мы написали говнокод. Пожалуйста, дождитесь, пока мы все исправим, и попытайтесь еще.')
        }
    };

    const getBonuses = async ({url, AccessToken}, method = 'GET') => {
        try {
            const response = await fetch(url, {method, headers: {'Content-Type': 'application/json', 'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c'}});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch(e) {
            console.log(e)
            alert('Не сработало. Кажется, мы написали говнокод. Пожалуйста, дождитесь, пока мы все исправим, и попытайтесь еще.')
        }
    };

    return {getToken, getBonuses} 
}




export default useHttp