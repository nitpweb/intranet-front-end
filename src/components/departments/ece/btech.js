import React from "react"

const Btech = [
  {
    deptt:"ECE",
    sem_elect: "1",
    course_code: "HS1501",
    course_title: "Science Society and Ethics",
    l: "2",
    t: "1",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/hs1052.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    course_code: "MA1501",
    course_title: "Engineering Mathematics-1",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ma12.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Course",
    course_code: "CH1501",
    course_title: "Engineering Chemistry",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ch1.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Course",
    course_code: "EC1501",
    course_title: " Elements of Electronics Engineering",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ec1.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Course",
    course_code: "EE1501",
    course_title: "Elements of Electrical Engineering",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ee1.docx",
  },

  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Lab",
    course_code: "CHL1501",
    course_title: "Chemistry Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/chl1.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    course_code: "ECL1501",
    course_title: "Elements of Electronics Engg Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ecl1.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Lab",
    course_code: "EEL1501",
    course_title: "Elements of Electrical Engg lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/eel1.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Lab",
    course_code: "ME1501",
    course_title: "Engineering Graphics Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "2",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/egl1.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "1",
    category: "Foundation Lab",
    course_code: "EAA1501",
    course_title: "EAA-Swachha Bharat Mission",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "Foundation Course",
    course_code: "HS2501",
    course_title: "Communicative English",
    l: "2",
    t: "1",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/hs2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    course_code: "MA2501",
    course_title: "Engineering Mathematics-II",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ma22.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    course_code: "PH2501",
    course_title: " Engineering Physics",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ph2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    course_code: "CS2501",
    course_title: " Introduction to Computing",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/cs2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "Core Course",
    course_code: "EC2501",
    course_title: " Semiconductor Devices and Circuits",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ec2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "Foundation Lab",
    course_code: "HSL2501",
    course_title: " Language Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/hsl2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "Foundation Lab",
    course_code: "PHL2501",
    course_title: " Physics Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/phl2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "Foundation Lab",

    course_code: "CSL2501",
    course_title: " Computing Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/csl2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "Core Lab",
    course_code: "<b> Core Lab</b>",
    course_code: "ECL2501",
    course_title: " Semiconductor Devices and Circuits Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ecl2.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "2",
    category: "EAA",
    course_code: "EAA2501",
    course_title: "EAA Sports/Innovative Projects",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Core Subjects",
    course_code: "EC3501",
    course_title: " Communication Engineering",
    l: "3",
    t: "1",
    p: "0",
    credits: "4",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ce3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Core Subjects",
    course_code: "EC3502",
    course_title: " Electromagnetic Field Theory",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/eft3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Core Subjects",
    course_code: "EC3503",
    course_title: " Signals and Systems Analysis",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ssa3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Foundation Course",
    course_code: "CS3501",
    course_title: " Data Structure",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/cs3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Foundation Course",
    course_code: "MA3501",
    course_title: " Engineering Mathematics-III",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ma3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Foundation Course",
    course_code: "EE3501",
    course_title: " Network Analysis and Synthesis",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/nas3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Lab Courses",
    course_code: "ECL3501",
    course_title: "Analog Electronics Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ael3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Lab Courses",
    course_code: "CSL3501",
    course_title: " Data Structure Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/csl3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "3",
    category: "Lab Courses",
    course_code: "ECL3502",
    course_title: " Signal and System Analysis Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ssal3.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Core Subjects",
    course_code: "EC4501",
    course_title: " Digital Electronics",
    l: "3",
    t: "1",
    p: "0",
    credits: "4",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/de4.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Core Subjects",
    course_code: "EC4502",
    course_title: " Communication Engineering",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/cs4.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Foundation Course",
    course_code: "CS4501",
    course_title: " Object Oriented Programming",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/oop4.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Professional Electives",
    course_code: "EC45xx",
    course_title: " Professional Electives-I",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pe5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "MOOC Course",
    course_title: "",
    course_code: "",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Open Electives",
    course_code: "OE0xxx",
    course_title: " Open Electives-I",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/OpenE.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Lab Courses",
    course_code: "ECL4501",
    course_title: " Digital Electronics Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/del4.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "4",
    category: "Lab Courses",
    course_code: "ECL4502",
    course_title: " Communication Engineering Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/cel4.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Core Subjects",
    course_code: "EC5501",
    course_title: " VLSI Design",
    l: "3",
    t: "1",
    p: "0",
    credits: "4",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/vlsi5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Core Subjects",
    course_code: "EC5502",
    course_title: " Advanced Communication Engineering",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ace5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Core Subjects",
    course_code: "EC5503",
    course_title: " Microprocessor & Microcontroller",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/mm5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Professional Electives",
    course_code: "EC55xx",
    course_title: " Professional Elective -II",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pe5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Foundation Course",
    course_code: "CH5501",
    course_title: " Green Technology",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/gt5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Open Electives-II",
    course_code: "OE0xxx",
    course_title: " Open Electives-II",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/OpenE.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Foundation Course",
    course_code: "ECL5501",
    course_title: "VLSI Design Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/vlsil5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Foundation Course",
    course_code: "ECL5502",
    course_title: "Advanced Communication Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/acl5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "5",
    category: "Foundation Course",
    course_code: "ECL5503",
    course_title: "Microprocessor & Microcontroller Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/mml5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Core Subjects",
    course_code: "EC6501",
    course_title: " Digital Signal Processing",
    l: "3",
    t: "1",
    p: "0",
    credits: "4",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/dsp6.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Core Subjects",
    course_code: "EC6502",
    course_title: " Antenna And Wave Propagation",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/awp6.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Professional Elective",
    course_code: "EC65xx",
    course_title: "Professional Elective- III",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pe5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Professional Elective",
    course_code: "EC65xx",
    course_title: "Professional Elective- IV",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pe5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "<b>MOOC</b>",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Open Electives",
    course_code: "OE0xxx",
    course_title: "Open Elective-III",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/OpenE.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Lab Courses",
    course_code: "ECL6501",
    course_title: "Digital Signal Processing Lab",
    l: "3",
    t: "0",
    p: "0",
    credits: "1",
  },
  {
    deptt:"ECE",
    sem_elect: "6",
    category: "Lab Courses",
    course_code: "ECL6502",
    course_title: "Antenna And Wave Propagation Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    category: "Core Subjects",
    course_code: "EC7501",
    course_title: " RF and Microwave Engineering ",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/rf.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    category: "Core Subjects",

    course_code: "EC7502",
    course_title: "Embedded System Design ",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    category: "Professional Electives",
    course_code: "EC75xx",
    course_title: "Professional Elective-V",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pe5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    category: "Open Electives",
    course_code: "EC75xx",
    course_title: "Open Elective-V",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/OpenE.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    course_code: "EC7503",
    course_title: "Seminar and Technical Report Writing",
    credits: "2",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    category: "Lab Courses",
    course_code: " ECL7501",
    course_title: "RF and Microwave Engineering Lab",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/rfl.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    course_code: "EC7504",
    course_title: "Short term industrial research Experience",
    credits: "1",
  },
  {
    deptt:"ECE",
    sem_elect: "7",
    course_code: "EC7505",
    course_title: "Project-I",
    credits: "5",
  },
  {
    deptt:"ECE",
    sem_elect: "8",
    category: "Core Subjects",
    course_code: "EC8501",
    course_title: "Optical and Wireless Communication",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "8",
    category: "Professional Electives",
    course_code: "EC85xx",
    course_title: "Professional Electives - VI",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pe5.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "8",
    course_code: "EC8502",
    course_title: "Seminar and Technical Report Writing",
    credits: "2",
  },
  {
    deptt:"ECE",
    sem_elect: "8",
    course_code: "EC8503",
    course_title: "Comprehensive Viva",
    credits: "2",
  },

  {
    deptt:"ECE",
    sem_elect: "8",
    category: "Lab Courses",
    course_code: "ECL8501",
    course_title: "Optical and Wireless Communication Lab ",
    l: "0",
    t: "0",
    p: "3",
    credits: "1",
  },
  {
    deptt:"ECE",
    sem_elect: "8",
    course_code: "EC8504",
    course_title: "Project-II",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx510",
    course_title: " Electronic Instrumentation",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/eipe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx511",
    course_title: " Computer Organization and Architecture",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/coape.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx512",
    course_title: " Semiconductor Device Modeling",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/sdmpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx513",
    course_title: " Linear Integrated Circuits",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/licpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx514",
    course_title: " Pulse and Digital Switching Circuits",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/pdswpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx515",
    course_title: " Control System",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/cspe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx516",
    course_title: "Sensors and Transducers",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx517",
    course_title: "Telecommunication Switching Networks",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx518",
    course_title: "Computer Communication",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx519",
    course_title: "Statistical Signal Processing",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx520",
    course_title: "IoT for Communication Engineering",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx521",
    course_title: " Wireless Sensor Networks",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx522",
    course_title: "Optoelectronics",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/wsnpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx523",
    course_title: "Biomedical Signal Processing",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx524",
    course_title: " Digital Image Processing",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/dippe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx525",
    course_title: "MIMO Communications",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx526",
    course_title: "Computer Vision and its applications",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx527",
    course_title: "Artificial Intelligence and Machine Learning",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx528",
    course_title: " Information Theory and Coding",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/itcpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx529",
    course_title: "Digital System Design",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx530",
    course_title: " Low Power Techniques in VLSI Design",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/lptpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx531",
    course_title: "Analysis and Design of Digital ICs",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx532",
    course_title: " RF Circuit Design",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/rfpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx533",
    course_title: "Micro Electro Mechanical Systems",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx534",
    course_title: "Optical Networks and Photonic Switches",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx535",
    course_title: " Satellite Communication",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/scpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx536",
    course_title: " Analog VLSI Design",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/ape.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx537",
    course_title: "Electromagnetic Interference and Compatibility",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx538",
    course_title: "VLSI Technology",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx539",
    course_title: " Speech  Processing",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/sppe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx540",
    course_title: "Optimization Technniques",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx541",
    course_title: "Communication Network Security",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx542",
    course_title: "Power Electronics",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx543",
    course_title: " Nano Electronic Devices",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
    url: process.env.GATSBY_BASE_URL+"ece/syllabus/nedpe.docx",
  },
  {
    deptt:"ECE",
    sem_elect: "EL",
    course_code: "ECx544",
    course_title: "Detection And Estimation Theory",
    l: "3",
    t: "0",
    p: "0",
    credits: "3",
  },
]

export default Btech
