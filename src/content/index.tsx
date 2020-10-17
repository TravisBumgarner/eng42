import file_1 from './water-system.json'
import file_2 from './kinematic-mirror-mount.json'
import file_3 from './laser-system-housing.json'
import file_4 from './peace-corps.json'
import file_5 from './solar-energy-storage-system.json'
import file_6 from './engineering-portfolio-v1-0.json'
import file_7 from './engineering-portfolio-v2-0.json'
import file_8 from './basura-cero-zero-waste.json'
import file_9 from './photography-portfolio-v1-0.json'
import file_10 from './spanish-vocabulary-translator.json'
import file_11 from './automated-film-scanner.json'
import file_12 from './hacking-medicine-2016-2017.json'
import file_13 from './painless-prototyping.json'
import file_14 from './pan-tilt-camera-rig.json'
import file_15 from './timelapse-camera.json'
import file_16 from './dr-becker-portfolio.json'
import file_17 from './baby-gym.json'
import file_18 from './assessment-to-action.json'
import file_19 from './engineering-portfolio-v3-0.json'
import file_20 from './a-woodworking-christmas.json'
import file_21 from './development-class.json'
import file_22 from './intro-to-arduino-workshop.json'
import file_23 from './security-system.json'
import file_24 from './meet-travisbumgarner.json'
import file_25 from './natgeo-assignment-fetch.json'
import file_26 from './etsy-photography-store.json'
import file_27 from './join-workout-club.json'
import file_29 from './splash-travisbumgarner.json'
import file_30 from './2d-plotter.json'
import file_31 from './cribbage-board.json'
import file_32 from './desk.json'
import file_33 from './nightstand.json'
import file_34 from './picture-frames.json'
import file_35 from './engineering-portfolio-v4-0.json'
import file_36 from './engineering-portfolio-v4-0-refactor.json'
import file_37 from './okemo-mountain-puzzle.json'
import file_38 from './i-make-things-blog.json'
import file_39 from './search-engine.json'
import file_40 from './photography-portfolio-v2-0.json'
import file_41 from './strangerer-things-lights.json'
import file_42 from './smart-display.json'
import file_43 from './charlie-brown-arduino-christmas.json'
import file_44 from './jewelry.json'
import file_45 from './hawkeye-beer.json'
import file_46 from './diy-camera.json'
import file_47 from './nightstand-v2.json'
import file_48 from './stitch-it-image-to-css-converter.json'
import file_49 from './twitch-stream.json'
import file_50 from './phone-stand.json'
import file_51 from './monitor-stand.json'
import file_52 from './digital-physical-pong.json'
import file_53 from './2d-plotter-the-final-attempts.json'
import file_54 from './engineering-portfolio-v4-2.json'

import skills_json from './skills.json'
import categories_json from './categories.json'

type Image = {
    name: string,
    src: string
}

type Link = {
    name: string,
    src: string
}

type Project = {
    "id": string,
    "name": string,
    "categories": number[],
    "organizations": string[],
    "locations": string[],
    "headline": string,
    "description": string,
    "start_date": string,
    "end_date": string,
    "skills": number[],
    "images": Image[],
    "links": Link[],
    "preview_img": Image
}

type Skills = {
    [key: string]: {
        id: number,
        name: string,
        category: string
    }
}

type Categories = {
    [key: string]: {
        id: number,
        name: string,
    }
}

const projects: Project[] = [
    file_1,
    file_2,
    file_3,
    file_4,
    file_5,
    file_6,
    file_7,
    file_8,
    file_9,
    file_10,
    file_11,
    file_12,
    file_13,
    file_14,
    file_15,
    file_16,
    file_17,
    file_18,
    file_19,
    file_20,
    file_21,
    file_22,
    file_23,
    file_24,
    file_25,
    file_26,
    file_27,
    file_29,
    file_30,
    file_31,
    file_32,
    file_33,
    file_34,
    file_35,
    file_36,
    file_37,
    file_38,
    file_39,
    file_40,
    file_41,
    file_42,
    file_43,
    file_44,
    file_45,
    file_46,
    file_47,
    file_48,
    file_49,
    file_50,
    file_51,
    file_52,
    file_53,
    file_54
]

const allSkills: Skills = skills_json
const allCategories: Categories = categories_json

export { allSkills, allCategories, Project, Skills, Categories }
export default projects