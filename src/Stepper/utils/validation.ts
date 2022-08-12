export const checkUsernameForLength = (username: string) =>
  username.length >= 4 && username.length <= 12;

export const checkUsernameExist = (username: string) =>
  fetch(`https://mansion-api.herokuapp.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => data.alreadyExist)
    .catch((error) => {
      console.log(error);
    });

export const checkPassword = (password: string) =>
  !!password.match(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=.?])[A-Za-z\d!@#$%^&*()_+-=.?]{6,12}$/
  );
