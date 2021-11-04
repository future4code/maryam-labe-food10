export const goToLogin = (history) => {
  history.push("/");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToProfile = (history) => {
  history.push("/perfil");
};

export const goToShopCart = (history) => {
  history.push("/carrinho");
};

export const goToRestaurants = (history, id) => {
  history.push(`/restaurantes/${id}`);
};

export const goToAddress = (history) => {
  history.push("/endereço");
};

export const goToUpDateProfile = (history) => {
  history.push("/perfil/update");
};

export const goToUpDateAddress = (history) => {
  history.push("/endereço/update");
};

export const goToBack = (history) => {
  history.go();
};
