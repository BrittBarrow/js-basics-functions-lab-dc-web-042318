function distanceFromHqInBlocks(location) {
  if (location < 42) {
    return 42 - location;
  } else{
    return location - 42;
  }
}

function distanceFromHqInFeet(location) {
  return (distanceFromHqInBlocks(location))*264;
}

function distanceTravelledInFeet(start,destination) {
  if (destination < start) {
    return (start - destination)*264;
  } else { return (destination - start)*264;
  }
}

function calculatesFarePrice(start,destination) {
  const distance = distanceTravelledInFeet(start,destination)
  if (distance <= 400) {
    return 0;
  } else if (400 < distance && distance < 2000) {
    return ((distance-400)*.02);
  }else if (2000 <= distance && distance <= 2500){
    return 25;
  }else {
    return 'cannot travel that far';
  }

}
