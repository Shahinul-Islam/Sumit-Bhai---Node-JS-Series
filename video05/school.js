const EventEmitter = require("events");
// const emitter = new EventEmitter();

class School extends EventEmitter {
	startPeriod() {
		//raise event after class ended
		setTimeout(() => {
			this.emit("bellRing", {
				period: "second",
				text: "period ended",
			});
		}, 2000);
	}
}

module.exports = School;
