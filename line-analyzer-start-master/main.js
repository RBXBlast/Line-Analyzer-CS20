// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results
  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
  // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
  let rise = y2 - y1;
  let run = x2 - x1;
  return (rise ** 2 + run ** 2) ** 0.5;
}

function getSlope(x1, y1, x2, y2) {
  let rise = y2 - y1;
  let run = x2 - x1;
  return rise / run;
}

function getDescription(x1, y1, x2, y2) {
  if (y2 - y1 < 0) {
    return "Decreasing";
  } else if (y2 - y1 > 0) {
    return "Increasing";
  } else if (y2 - y1 == 0) {
    return "Horizontal";
  } else if (x2 - x1 == 0) {
    return "Vertical";
  }
}

function getPointLocation(x1, y1) {
  if (x1 == 0 && y1 == 0) {
    return "Point of Origin";
  } else if (y1 == 0) {
    return "X-Axis";
  } else if (x1 == 0) {
    return "Y-Axis";
  } else if (x1 > 0 && y1 > 0) {
    return "Quadrant 1";
  } else if (x1 < 0 && y1 > 0) {
    return "Quadrant 2";
  } else if (x1 < 0 && y1 < 0) {
    return "Quadrant 3";
  } else if (x1 > 0 && y1 < 0) {
    return "Quadrant 4";
  }
}

function getPointLocation(x2, y2) {
  if (x2 == 0 && y2 == 0) {
    return "Point of Origin";
  } else if (y2 == 0) {
    return "X-Axis";
  } else if (x2 == 0) {
    return "Y-Axis";
  } else if (x2 > 0 && y2 > 0) {
    return "Quadrant 1";
  } else if (x2 < 0 && y2 > 0) {
    return "Quadrant 2";
  } else if (x2 < 0 && y2 < 0) {
    return "Quadrant 3";
  } else if (x2 > 0 && y2 < 0) {
    return "Quadrant 4";
  }
}

function getEquation(x1, y1, x2, y2) {
  let rise = y2 - y1;
  let run = x2 - x1;
  let m = rise / run;
  let x = x1;
  let b = y1 - m * x;
  return m * x + b;
}
