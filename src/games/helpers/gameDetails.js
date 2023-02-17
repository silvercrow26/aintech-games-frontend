import { useState } from "react"

const details = {
    genres: "",
    header_image:"",
    required_age:"",
    detailed_description:"",
    developers:"",
    publishers:"",
    release_date:"",
    pc_requirements:"",
    background:"",
}

const [genres, setGenres] = useState([]);
const [header_image, setHeader_image] = useState("");
const [required_age, setrequired_age] = useState('');
const [detailed_description, setdetailed_description] = useState('');
const [developers, setdevelopers] = useState('');
const [publisher, setpublisher] = useState('');
const [publishers, setpublishers] = useState('');
const [release_date, setrelease_date] = useState('');
const [pc_requirements, setpc_requirements] = useState('');
const [background, setbackground] = useState('');