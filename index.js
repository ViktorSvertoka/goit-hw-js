function slugify(title) {
  // Change code below this line

  const normalizedTitle = title.toLowerCase();
  console.log(normalizedTitle);

  const words = normalizedTitle.split(" ");
  console.log(words);

  const slug = words.join("-");
  console.log(slug);

  // const slug = title.toLowerCase().split(" ").join("-");

  // Change code above this line
}
