import { Employe, Department, SalaryDetails } from "../interfaces/employe.interface"

export const employes:Employe[]  = [
    {
       'id': 50011,
       'firstName': 'Cedric',
       'lastName': 'Florentine',
       'gender': 'Male',
       'email': 'cflorentine0@yahoo.com',
       'mobile': '9964551698',
       'address': '13832 Superior Plaza',
       'city': 'Gordeyevka',
       'designation': 'Manager',
       'department': 301,
       'status': 'Active' 
    },
    {
        'id': 50012,
        'firstName': 'Hilliard',
        'lastName': 'Faragan',
        'gender': 'Male',
        'email': 'hfaragan1@gmail.com',
        'mobile': '9960970796',
        'address': '9752 Holy Cross Hill',
        'city': 'Mersam',
        'designation': 'Developer',
        'department': 302,
        'status': 'Inactive' 
    },
    {
        'id': 50013,
        'firstName': 'Martita',
        'lastName': 'Townson',
        'gender': 'Female',
        'email': 'mtownson2@gmail.com',
        'mobile': '9946677086',
        'address': '53293 Cardinal Way',
        'city': 'Pilar',
        'designation': 'Lead',
        'department': 304,
        'status': 'Inactive' 
    },
    {
        'id': 50013,
        'firstName': 'Martita',
        'lastName': 'Townson',
        'gender': 'Female',
        'email': 'mtownson2@gmail.com',
        'mobile': '9946677086',
        'address': '53293 Cardinal Way',
        'city': 'Pilar',
        'designation': 'Lead',
        'department': 304,
        'status': 'Inactive' 
    },
    {
        'id': 50013,
        'firstName': 'Martita',
        'lastName': 'Townson',
        'gender': 'Female',
        'email': 'mtownson2@gmail.com',
        'mobile': '9946677086',
        'address': '53293 Cardinal Way',
        'city': 'Pilar',
        'designation': 'Lead',
        'department': 304,
        'status': 'Inactive' 
    },
    {
        'id': 50014,
        'firstName': 'Lyssa',
        'lastName': 'Seabert',
        'gender': 'Female',
        'email': 'lseabert3@rediff.com',
        'mobile': '9986675623',
        'address': '6 Stoughton Crossing',
        'city': 'Pulilan',
        'designation': 'Developer',
        'department': 302,
        'status': 'Active' 
    },
    {
        'id': 50014,
        'firstName': 'Lyssa',
        'lastName': 'Seabert',
        'gender': 'Female',
        'email': 'lseabert3@rediff.com',
        'mobile': '9986675623',
        'address': '6 Stoughton Crossing',
        'city': 'Pulilan',
        'designation': 'Developer',
        'department': 302,
        'status': 'Active' 
    },
    {
        'id': 50015,
        'firstName': 'Aileen',
        'lastName': 'Colles',
        'gender': 'Female',
        'email': 'acolles4@yahoo.com',
        'mobile': '9985815195',
        'address': '17 Mariners Cove Center',
        'city': 'Unawatuna',
        'designation': 'Manager',
        'department': 303,
        'status': 'Inactive' 
    },
    {
        'id': 50016,
        'firstName': 'Clea',
        'lastName': 'Tye',
        'gender': 'Female',
        'email': 'ctye5gmail@gmail.com',
        'mobile': '9931540089',
        'address': '7 Oak Valley Road',
        'city': 'Boychinovtsi',
        'designation': 'Manager',
        'department': 304,
        'status': 'Inactive' 
    },
    {
        'id': 50017,
        'firstName': 'Broddie',
        'lastName': 'Tredger',
        'gender': 'Male',
        'email': 'btredger6@yahoo.com',
        'mobile': '9974863173',
        'address': '950 Katie Alley',
        'city': 'Kumagunnam',
        'designation': 'Manager',
        'department': 302,
        'status': 'Active' 
    },
    {
        'id': 50018,
        'firstName': 'Abbott',
        'lastName': 'Densell',
        'gender': 'Male',
        'email': 'adensell7@gmail.com',
        'mobile': '9925968524',
        'address': '123 Shasta Road',
        'city': 'Bagumbayan',
        'designation': 'Lead',
        'department': 302,
        'status': 'Active' 
    },
    {
        'id': 50019,
        'firstName': 'Ximenez',
        'lastName': 'Petrushanko',
        'gender': 'Male',
        'email': 'xpetrushanko8@rediff.com',
        'mobile': '9906890317',
        'address': '03456 Barby Alley',
        'city': 'Krenggan',
        'designation': 'Lead',
        'department': 304,
        'status': 'Inactive' 
    },
    {
        'id': 50019,
        'firstName': 'Ximenez',
        'lastName': 'Petrushanko',
        'gender': 'Male',
        'email': 'xpetrushanko8@rediff.com',
        'mobile': '9906890317',
        'address': '03456 Barby Alley',
        'city': 'Krenggan',
        'designation': 'Lead',
        'department': 304,
        'status': 'Inactive' 
    },
    {
        'id': 50020,
        'firstName': 'Danit',
        'lastName': 'McCreagh',
        'gender': 'Female',
        'email': 'dmccreagh9@gmail.com',
        'mobile': '9959826056',
        'address': '6 Almo Circle',
        'city': 'Pegões',
        'designation': 'Developer',
        'department': 303,
        'status': 'Active' 
    },
]

export const departments: Department[] = [
    {
        'id': 301,
        'name': 'Operations',
        'description': 'Operations',
        'status': 'Active'
    },
    {
        'id': 302,
        'name': 'IT',
        'description': 'IT',
        'status': 'Active'
    },
    {
        'id': 303,
        'name': 'Finance',
        'description': 'Finance',
        'status': 'Active'
    },
    {
        'id': 304,
        'name': 'HR',
        'description': 'HR',
        'status': 'Active'
    },
    {
        'id': 305,
        'name': 'Support',
        'description': 'Support',
        'status': 'Inactive'
    },
]

export const salaryDetails: SalaryDetails[] = [
    {
        'id': 101,
        'employeId': 50011,
        'salary': '1,05,000'
    },
    {
        'id': 102,
        'employeId': 50012,
        'salary': '52,000'
    },
    {
        'id': 103,
        'employeId': 50013,
        'salary': '73,600'
    },
    {
        'id': 104,
        'employeId': 50014,
        'salary': '35,000'
    },
    {
        'id': 105,
        'employeId': 50015,
        'salary': '1,10,000'
    },
    {
        'id': 106,
        'employeId': 50016,
        'salary': '95,000'
    },
    {
        'id': 107,
        'employeId': 50017,
        'salary': '98,000'
    },
    {
        'id': 108,
        'employeId': 50018,
        'salary': '1,00,500'
    },
    {
        'id': 109,
        'employeId': 50019,
        'salary': '64,050'
    },
    {
        'id': 110,
        'employeId': 50020,
        'salary': '86,000'
    }
]

