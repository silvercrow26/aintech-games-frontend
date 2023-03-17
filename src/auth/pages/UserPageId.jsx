import { faPencilAlt, faTowerCell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthStore } from "../hooks/useAuthStore";

export const UserPageId = () => {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <>
      <section className="mt-5 text-light container  cardDetailUser mb-5">
            <button className="btn btn-danger d-flex justify-content- mb-5">  <FontAwesomeIcon icon={faTowerCell} className="fa-x3"/> Centro de soporte</button>
      <div className="p-3 text-light text-center w-100 mb-3 ">
        <h3>Detalles de la cuenta</h3>
        <hr />
      </div>
        <div className="text-center   w-100 table-responsive ">
          <table className="table table-dark table-hover text-light backgroundAdminSideBar ">
            <thead>
              <tr>
                <th>Nombre de usuario</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Creación de la cuenta</th>
                <th>Última actualización</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>{user.name} </td>
                <td>
                  {user.email}{" "} 
                
                </td>
                <td>{user.role.name}</td>
                <td>{user.createdAt.slice(0, 10)}</td>
                <td>{user.updatedAt.slice(0, 10)}</td>
                <td> <button className="btn btn-outline-warning text-light"> <FontAwesomeIcon icon={faPencilAlt} /> Editar Cuenta </button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
