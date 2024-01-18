export function labelHolder(inputName: string) {
  if (inputName) {
    if (inputName.length < 1) return null;
    return " !top-0 text-sm !text-secondaryAccent";
  }
}
