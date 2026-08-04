import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 },   // Ramp-up to 100 VUs
    { duration: '1m', target: 1000 },   // Ramp-up to 1,000 VUs
    { duration: '2m', target: 10000 },  // Peak load: 10,000 VUs
    { duration: '30s', target: 0 },     // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<300'], // 95% of requests must complete below 300ms SLA
    http_req_failed: ['rate<0.01'],    // Error rate below 1%
  },
};

export default function () {
  const res = http.get('http://localhost:3000/health');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 300ms': (r) => r.timings.duration < 300,
  });
  sleep(1);
}
