class Schedule {
  constructor(
    startStation,
    arrivalTime,
    depatureTime,
    destination,
    endStation,
    frequency,
    name,
    type,
    availableClasses,
    trainsEndAt,
    trainNo
  ) {
    this.startStation = startStation;
    this.arrivalTime = arrivalTime;
    this.depatureTime = depatureTime;
    this.destination = destination;
    this.endStation = endStation;
    this.frequency = frequency;
    this.name = name;
    this.type = type;
    this.availableClasses = availableClasses;
    this.trainsEndAt = trainsEndAt;
    this.trainNo = trainNo;
  }
}

module.exports = Schedule;
