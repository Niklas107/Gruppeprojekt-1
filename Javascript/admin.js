class Admin extends User {                                                                   // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName, adminName) {   // Alle attributter til admin
        super(userName, password, email, phoneNumber, firstName, lastName);
        this.adminName = adminName;                                                         //Ekstra attributter som er opstillet til admin
    }
    }

//Lav en removeTeacher og removeStudent funktion

//Harcode én bruger, som er admins' login
//