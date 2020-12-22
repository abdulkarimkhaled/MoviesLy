import { create } from 'apisauce';
import ApiConstants from "./ApiConstants"

// define the api  
// api key 0df2911696acdda5bc55326b03008176
export const API = create({
  baseURL: ApiConstants.BASE_URL,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGYyOTExNjk2YWNkZGE1YmM1NTMyNmIwMzAwODE3NiIsInN1YiI6IjVmZGIxZDgwODU4Njc4MDAzZmY2NDg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wndv-jOUdhGclO0QGhBptOJ_a75zlcuXgWCPjT05ZoU',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

API.addMonitor();
