// HP - Harry Potter API

import { useHttp } from "../components/hooks/http.hook";

const useHpService = () => {
    const _apiBase = "//hp-api.herokuapp.com/api";

    const { loading, request, error, clearError } = useHttp();

    const getResource = async (url) => {
        return await request(`${_apiBase}${url}`);
    }

    const getAllCharacters = async () => {
        const res = await getResource('/characters');
        return res.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const AllChars = await getAllCharacters();
        return AllChars[id];
    }

    const getAllStudents = async () => {
        const res = await getResource('/characters/students');
        return res;
    }

    const getStudent = async (id) => {
        const AllStuds = await getAllStudents();
        return _transformCharacter(AllStuds[id]);
    }


    const getHouseChars = async (house = "gryffindor") => {
        const res = await getResource(`/characters/house/${house}`);
        return res.map(_transformCharacter);
    }

    const getAllStaff = async () => {
        const res = await getResource('/characters/staff');
        return res.map(_transformStaff);
    }

    const getStaff = async (id) => {
        const AllStaff = await getAllStaff();
        return _transformStaff(AllStaff[id]);
    }

    const _isEmpty = (item) => {
        return item ? item : "sorry, no-data :(";
    }

    const _transformCharacter = (char) => {
        return {
            name: _isEmpty(char.name),
            gender: _isEmpty(char.gender),
            house: _isEmpty(char.house),
            born: _isEmpty(char.dateOfBirth),
            actor: _isEmpty(char.actor),
            image: char.image ? char.image : 'https://ualr.edu/elearning/files/2020/10/No-Photo-Available-924x1155.jpg',
        }
    }

    const _transformStaff = (char) => {
        return {
            hogwartsStaff: _isEmpty(char.hogwartsStaff),
            name: _isEmpty(char.name),
            gender: _isEmpty(char.gender),
            house: _isEmpty(char.house),
            born: _isEmpty(char.dateOfBirth),
            image: char.image ? char.image : 'https://ualr.edu/elearning/files/2020/10/No-Photo-Available-924x1155.jpg',
        }
    }

    return {
        loading, request, error, clearError,
        getAllCharacters,
        getCharacter,
        getAllStudents,
        getStudent,
        getHouseChars,
        getAllStaff,
        getStaff,
    }

}

export default useHpService;