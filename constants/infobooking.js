const InfoBooking = {
    departure: '',
    destination: '',
    idVehicle: '',
    idJourney: '',
    seats: new Array(),
    idPickingPoint: '',
    quantity: 0,
    time: '',
    price: 0
}

const Customer = { id: '', name: '', phone: '', email: '', passport: '', };

const getValueInfoBooking = (key) => {
    return InfoBooking[key]
}

const setValueInfoBooking = (key, value) => {
    InfoBooking[key] = value;
}

const getValueInfoCustomer = (key) => {
    return Customer[key]
}

const setValueInfoCustomer = (key, value) => {
    Customer[key] = value;
}


const setCustomer = (id, name, phone, email, passport) => {
    Customer.id = id;
    Customer.name = name;
    Customer.phone = phone;
    Customer.email = email;
    Customer.passport = passport;
}

const resetInfoBooking = () => {
    InfoBooking.departure = '';
    InfoBooking.destination = '';
    InfoBooking.idJourney = '';
    InfoBooking.idPickingPoint = '';
    InfoBooking.idVehicle = '';
    InfoBooking.price = 0;
    InfoBooking.quantity = 0;
    InfoBooking.seats = new Array();
    InfoBooking.time = '';
}
    export { 
        InfoBooking, 
        getValueInfoBooking, 
        setValueInfoBooking, 
        getValueInfoCustomer, 
        setValueInfoCustomer, 
        Customer, 
        setCustomer,
        resetInfoBooking 
    }
