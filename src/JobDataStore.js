import {create} from "zustand";

const useJobDataStore = create((set) => ( {
    jobList: [],
    setJobList: (jobs) => set(() => ({jobList: jobs})),
    addJob: (job) => set((state) => ({jobList: [...state.jobList, job]}))
}));

export default useJobDataStore;