// Write a class RecentCounter to count recent requests.

// It has only one method: ping(int t), where t represents some time in milliseconds.

// Return the number of pings that have been made from 3000 milliseconds ago until now.

// Any ping with time in [t - 3000, t] will count, including the current ping.

// It is guaranteed that every call to ping uses a strictly larger value of t than before.

// Example 1:

// Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
// Output: [null,1,2,3,3]

var RecentCounter = function() {
  this.queue = [];
};

RecentCounter.prototype.ping = function(t) {
  this.queue.push(t);
  while (this.queue.length && this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};
