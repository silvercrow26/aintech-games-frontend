import React from 'react'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useGameStore, useUiStore, useDownloadServerStore, GameModal } from '../index';

export const AdminGameDatabaseItem = ({ game }) => {

    const { openDateModal } = useUiStore();
    const { setDownloadServers } = useDownloadServerStore();
    const { setActiveGame, startDeleteGame } = useGameStore();


    const handleDelete = () => {
        setActiveGame(game);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                startDeleteGame(game);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

  const handleEdit = () => {
    openDateModal();
    setActiveGame(game);
    setDownloadServers(game.downloadserver);
  };

    return (
        <>
            <tr>
                <td>{game._id}</td>
                <td>{game.name}</td>
                <td>{game.steamId}</td>
                <td>{game.requirements.toUpperCase().replace("-", ' ')}</td>
                <td className="">
                    <button onClick={handleEdit} className="btn btn-outline-warning text-light">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>{" "}
                    <br />{" "}
                    <button onClick={handleDelete} className="btn btn-outline-danger mt-2">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
            </tr>
            <GameModal />
        </>
    )
}
