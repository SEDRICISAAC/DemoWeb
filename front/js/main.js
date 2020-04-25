class mymapa {
    usuarios = () => {
        const http = new XMLHttpRequest();
        const API_URL = "http://localhost:3000/users";

        http.open('GET', API_URL);
        http.send();
        http.onload = () => {
            if (http.status === 200) {    
                const datos = JSON.parse(http.response);
                alert(JSON.stringify(datos))
                return datos;
            }
        }
    }

    points = () => {
        const http = new XMLHttpRequest();
        const API_URL = "http://localhost:3000/users";
        
        http.open('GET', API_URL);
        http.send();
        http.onload = () => {
            if (http.status === 200) {    
                const data = JSON.parse(http.response);
                const quito = [ -0.178810, -78.468893]
                const mymap = L.map('mapa', { zoom: 12, center: quito });
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
            
                data.forEach( item => {
                    item.usuarios = L.marker([ item.longitud, item.latitud ]).bindPopup( item.casa );
                    const ubicaciones = L.layerGroup([ item.usuarios]).addTo(mymap);
                })
            }
        }
    }
}

const mostrar = new mymapa();

points = () => {
    return mostrar.points();
}
usuarios = () => {
    return mostrar.usuarios();
}