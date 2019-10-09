// Synchronously add an employee.
// addEmployee("Bob");
const addEmployee = name => ({
  type: 'ADD_EMPLOYEE',
  name
});

// Asynchronously add an employee.
// addEmployeeAsync("Bob")
const addEmployeeAsync = name => {
  // Since the return value of this action creator
  //   accepts dispatch as a parameter instead of
  //   returning what is to be dispatched,
  //   I may dispatch at my leisure and as many times as I want.
  return (dispatch, getState) => {
    // I want to immediately and synchronously add the employee.
    dispatch(addEmployee(name));

    // I want to asynchronously remove the employee.
    // This is a second action in a single action creator.
    setTimeout(() => {
      dispatch(removeEmployee(name));
    }, 0);

    // I want to asynchronously re-add that employee after 5 seconds.
    // This is a third action in a single action creator.
    setTimeout(() => {
      dispatch(addEmployee(name));
    }, 5000);
  };
};
