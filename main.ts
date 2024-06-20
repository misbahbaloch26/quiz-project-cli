import inquirer from "inquirer"

const quiz :{
   question_1 : string;
   question_2 : string;
   question_3 : string;
   question_4 : string;
   question_5 : string;
}= await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: What is the Islamic declaration of faith?",
        choices: ["Shahada" , "Salah" , "zakat" , "Sawm"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: What is the name of the Islamic month of fasting?",
        choices: ["Shawwal" , "Dhu al-Hijjah" , "Ramadan" , "Rabi' al-Awwal"]
       
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3: What is the name of the angel who revealed the Quran to Muhammad?",
        choices: ["Michael" , "Jibril" , "Azrael" ]
       
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4: What is the Arabic term for the call to prayer?",
        choices: ["iqama" , "takbir" , "salat" , "adhan" ]
       
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5: What is the Arabic term for the migration of Prophet Muhammad from Mecca to Medina?",
        choices: ["hijrah" , "takbir" , "miraj" , "tawaf" ]
       
    },
])

let score:number = 0 ;

switch (quiz.question_1) {
    case "Shahada":
        console.log("correct Ans!")
        ++score
        break;
       default:
        console.log("incorrect")
    }


switch (quiz.question_2) {
        case "Ramadan":
            console.log("correct Ans!")
            ++score
            break;
           default:
            console.log("incorrect")
        }


 switch (quiz.question_3) {
            case "Jibril":
                console.log("correct Ans!")
                ++score
                break;
               default:
                console.log("incorrect")
            }

            switch (quiz.question_4) {
                case "adhan":
                    console.log("correct Ans!")
                    ++score
                    break;
                   default:
                    console.log("incorrect")
                }
                switch (quiz.question_5) {
                    case "hijrah":
                        console.log("correct Ans!")
                        ++score
                        break;
                       default:
                        console.log("incorrect")
                    }

    console.log(`SCORE: ${score}`);
    