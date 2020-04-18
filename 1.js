// Profile Function get parameter
const profile = (name = 'Bilkis Ismail', age = 18) => {
    let jsonData = {
        name: name,
        age: age,
        address: "Kp Pondok Arum, Karawaci, Kota Tangerang, Banten",
        hobbies: ['Music', 'Football'],
        is_married: false,
        list_school: {
            high_school: {
                name: "SMKN 4 Kota Tangerang",
                year_in: "2017",
                year_out: "2020",
                major: null,
            },
            middle_school: {
                name: "MTS Daarul Irfan",
                year_in: "2014",
                year_out: "2017",
                major: null,
            },
            primary_school: {
                name: "MI Al-Husna",
                year_in: "2009",
                year_out: "2014",
                major: null,
            }
        },
        skills: {
            php: "advanced",
            laravel_lumen: "advanced",
            codeigniter: "advanced",
            bootstrap: "advanced",
            coreldraw: "advance",
            adobe_xd: "advance",
            wordpress: "advanced",
            javascript: "advanced",
            jquery: "advanced",
            git: "beginner",
            mysql: "beginner",
            react: "beginner",
            linux: "beginner"
        },
        interest_in_coding: true,
    };

    return JSON.stringify(jsonData);
};

const run = profile('Bilkis Ismail', '18');
console.log(run);