import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {
 
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  // ngAfterViewInit(){
  //   this.dataSource.sort=this.sort;
  // }
}
