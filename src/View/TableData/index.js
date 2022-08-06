// Packages
import React, { useState } from 'react'

// React-bootstrap Component
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// Components
import ConfirmModalForDelete from '../DeleteModal/ConfirmModalForDelete'

/**
 * Display List of Users using React-bootstrap table
 * @returns Node Elements
 */
const ShowUsersInTable = (props) => {
  // Destructring props with Validating
  const { userData, userUpdate } = props || []
  // states
  const [userLimit, setUserLimit] = useState(10)
  const slicedData = userData.slice(0, userLimit)

  /**
   * Use to Handel Load More Button
   */
  const HandelLoadMoreBtn = () => {
    setUserLimit(userLimit + 10)
  }
  return (
    <div className="position-relative mx-3">
      <Table hover className="my-4">
        <thead className="table-light border-none bg-gray-400 sticky-top text-sm">
          <tr>
            <th scope="col" className="font-sans font-normal">
              S.NO
            </th>
            <th scope="col" className="font-normal">
              USER
            </th>
            <th scope="col" className="font-normal">
              JOIN AT
            </th>
            <th scope="col" className="text-end font-normal">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-sans">
          {/* Checking userData is Null or Not */}
          {slicedData ? (
            slicedData.map((item) => (
              // Passing The Data  as Props to Child Component
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td className="text-end">
                  {/* Pasing Data as Props to Child Components */}
                  <ConfirmModalForDelete
                    deleteId={item.id}
                    userData={userData}
                    userUpdate={userUpdate}
                  />
                </td>
              </tr>
            ))
          ) : (
            <h1>Data Not Found</h1>
          )}
        </tbody>
      </Table>
      <div className="d-flex flex-row justify-content-center sticky-bottom bg-light p-2">
        <Button
          variant="primary"
          onClick={HandelLoadMoreBtn}
          className="bg-sky-600"
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default ShowUsersInTable
