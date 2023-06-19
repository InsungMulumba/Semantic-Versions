function nextVersion(version) {
  const releases = version.split(".");

  for (let i = releases.length - 1; i >= 0; i--) {
    if (i > 0 && Number(releases[i]) === 9) {
      releases[i] = 0;
    } else {
      releases[i]++;
      break;
    }
  }

  const updatedVersionNumber = releases.join(".");
  return updatedVersionNumber;
}

export default nextVersion;
