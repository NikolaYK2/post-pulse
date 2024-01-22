export const formattedTitle = (title: string | undefined) => {
  if (title !== undefined) {
    return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  } else {
    return ''
  }
}